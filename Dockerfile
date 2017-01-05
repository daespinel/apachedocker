FROM ubuntu:latest
MAINTAINER David Espinel <dafespinelsa@unal.edu.co>
RUN apt-get update && apt-get install -y apache2 && apt-get install python -y && apt-get install openssh-server -y && apt-get install -y net-tools && apt-get install -y openssl

RUN mkdir /var/run/sshd
RUN echo 'root:screencast' | chpasswd
RUN sed -i 's/PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config


RUN sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd

ENV NOTVISIBLE "in users profile"
RUN echo "export VISIBLE=now" >> /etc/profile

RUN	chmod -R 755 /var/www/

COPY flags/  /var/www/page1.com/html/
COPY flags/  /var/www/page2.com/html/
COPY index2/  /var/www/page3.com/html/
COPY amazon/  /var/www/page4.com/html/
COPY webdata/ /var/www/


COPY server_config/ifaces_config/ /home/server/ifaces_config/

COPY config/000-default.conf /etc/apache2/sites-available/

COPY deploy/ /home/deploy/

RUN sh /usr/share/doc/apache2/examples/setup-instance 001 \
	&& sh /usr/share/doc/apache2/examples/setup-instance 002 

WORKDIR /home/deploy

RUN python /home/deploy/plain_deploy.py --input /home/deploy/latency.DATA
RUN cp /home/deploy/h1.apache /etc/apache2-001/sites-available/000-default.conf
RUN cp /home/deploy/h2.apache /etc/apache2-002/sites-available/000-default.conf
RUN a2enmod-001 ssl
RUN a2enmod-002 ssl
RUN python /home/deploy/generate_faces.py --input /home/deploy/latency.DATA
RUN cp /home/deploy/server_ifaces.settings /home/server/ifaces_config/server_ifaces.settings

COPY config/services.sh /home/
RUN chmod 755 /home/services.sh


COPY ssl_certificates/apache-001.crt /etc/apache2-001/ssl/
COPY ssl_certificates/apache-001.key /etc/apache2-001/ssl/
COPY ssl_certificates/apache-002.crt /etc/apache2-002/ssl/
COPY ssl_certificates/apache-002.key /etc/apache2-002/ssl/

WORKDIR /home

EXPOSE 80
EXPOSE 443
EXPOSE 22

CMD ["/home/services.sh"]
#CMD service ssh start \ 
#	&& echo '192.168.0.1 page1.com' >> /etc/hosts \
#	&& echo '192.168.0.2 page2.com' >> /etc/hosts \
#	&& echo '192.168.0.3 page3.com' >> /etc/hosts \
#	&& echo '192.168.0.4 page4.com' >> /etc/hosts \
#	&& /home/server/ifaces_config/./start_ifaces.sh start \
#	&& service apache2-001 start \
#	&& /home/./services.sh start \
#	&& /bin/bash
#	&& systemctl start apache2-001.service -D FOREGROUND
#	&& /usr/sbin/apache2ctl -D FOREGROUND


#funciona!!