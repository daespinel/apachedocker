FROM ubuntu:latest
MAINTAINER David Espinel <dafespinelsa@unal.edu.co>
RUN apt-get update && apt-get install -y apache2 && apt-get install python -y && apt-get install openssh-server -y && apt-get install -y net-tools

RUN mkdir /var/run/sshd
RUN echo 'root:screencast' | chpasswd
RUN sed -i 's/PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config

# SSH login fix. Otherwise user is kicked off after login
RUN sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd

ENV NOTVISIBLE "in users profile"
RUN echo "export VISIBLE=now" >> /etc/profile

#RUN mkdir -p /var/www/page1.com/html/ \
#	&& mkdir -p /var/www/page2.com/html/ \
#	&& mkdir -p /var/www/page3.com/html/ \
#	&& chown -R apache:apache /var/www/ \
RUN	chmod -R 755 /var/www/

#COPY index/  /var/www/html/
COPY flags/  /var/www/page1.com/html/
COPY flags/  /var/www/page2.com/html/
COPY index2/  /var/www/page3.com/html/
COPY amazon/  /var/www/page4.com/html/
COPY webdata/ /var/www/


#RUN /bin/echo '192.168.0.1 page1.com' >> /etc/hosts \
#	&& /bin/echo '192.168.0.2 page2.com' >> /etc/hosts \
#	&& /bin/echo '192.168.0.3 page3.com' >> /etc/hosts 

#RUN cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/page1.conf \
#	&& cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/page2.conf \
#	&& cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/page3.conf


COPY server_config/ifaces_config/ /home/server/ifaces_config/

#COPY config/000-default.conf /etc/apache2/sites-available/

COPY config/000-default.conf /etc/apache2/sites-available/

#RUN sh /usr/share/doc/apache2/examples/setup-instance 001 \
#	&& sh /usr/share/doc/apache2/examples/setup-instance 002 \
#	&& sh /usr/share/doc/apache2/examples/setup-instance 003 \
#	&& sh /usr/share/doc/apache2/examples/setup-instance 004 \
#	&& sh /usr/share/doc/apache2/examples/setup-instance 005 \
#	&& sh /usr/share/doc/apache2/examples/setup-instance 006 \
#	&& sh /usr/share/doc/apache2/examples/setup-instance 007 \
#	&& sh /usr/share/doc/apache2/examples/setup-instance 008 \
#	&& sh /usr/share/doc/apache2/examples/setup-instance 009 

#RUN a2ensite page1.conf \
#	&& a2ensite page2.conf \
#	&& a2ensite page3.conf \
#	&& a2ensite page4.conf

EXPOSE 80
EXPOSE 443
EXPOSE 22
CMD service ssh start \ 
#	&& echo '192.168.0.1 page1.com' >> /etc/hosts \
#	&& echo '192.168.0.2 page2.com' >> /etc/hosts \
#	&& echo '192.168.0.3 page3.com' >> /etc/hosts \
#	&& echo '192.168.0.4 page4.com' >> /etc/hosts \
	&& /home/server/ifaces_config/./start_ifaces.sh start \
	&& /usr/sbin/apache2ctl -D FOREGROUND


#funciona!!