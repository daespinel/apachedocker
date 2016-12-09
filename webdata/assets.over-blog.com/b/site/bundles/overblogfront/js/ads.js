/*eslint-disable */


function ob_google_ad_request_done (google_ads)
{
	var adsense = '',
	i = 0;

	/*
	 * Vérifiez qu'il existe bien des annonces à afficher.
	 */
	if (google_ads.length > 0)
	{
		adsense	= '<div class="Adsense">';

			if(google_articleTpl == 3)
			{
				adsense	+=  '<div class="Adsense-adsByGoogle type">';
				adsense	+=  '<a href=\"' + google_info.feedback_url + '\" class="_blank">Ads by Google</a>';
				adsense	+=  '<span></span>';
				adsense	+=  '</div>';
			}
			else
			{
				adsense	+=  '<p class="Adsense-adsByGoogle">';
				adsense	+=  '<a href=\"' + google_info.feedback_url + '\" class="_blank">Ads by Google</a>';
				adsense	+=  '</p>';
			}
		adsense	+=  '<div class="Adsense-adsWrapper">';

		if (google_ads[0].type == "flash")
		{
			adsense	+= '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" '
					+  ' codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" '
					+  ' width="' + google_ad.image_width + '" '
					+  ' height="' +  google_ad.image_height + '">'

					+  '<param name="movie" value="' + google_ad.image_url + '">'

					+  '<param name="quality" value="high">'

					+  '<param name="AllowScriptAccess" value="never">'

					+  '<embed src="' + google_ad.image_url + '" '
					+  ' width="' + google_ad.image_width + '" '
					+  ' height="' + google_ad.image_height + '" '
					+  ' type="application/x-shockwave-flash"'
					+  ' AllowScriptAccess="never" '
					+  ' pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>'
					+  ' </object>';

		}
		else if (google_ads[0].type == "image")
		{
			adsense	+= '<a href="' + google_ads[0].url + '" class="_blank">'
					+  '<img src="'+ google_ads[0].image_url + '" '
					+  '     width="' + google_ads[0].image_width + '" '
					+  '     height="' + google_ads[0].image_height + '" />'
					+  '</a>';
		}
		else if (google_ads[0].type == "html")
		{
			s	+= google_ads[0].snippet;
		}
		else
		{
			if (google_ads.length > 0)
			{
				for(i = 0; i < google_ads.length; ++i)
				{
					adsense	+= '<div class="Adsense-adsContent">';
					adsense	+= '	<p class="Adsense-adTitle">';
					adsense	+= '		<a href="' + google_ads[i].url + '" class="_blank">' + google_ads[i].line1 + '</a>';

					if(google_articleTpl == 1)
					{
						adsense	+= '	<a href="' + google_ads[i].url + '" class="link _blank">' + google_ads[i].visible_url + '</a>';
					}

					adsense	+= '	</p>';
          adsense += '  <p class="Adsense-adDescription">';
          adsense += '    ' + google_ads[i].line2
          adsense += '    ' + google_ads[i].line3
          adsense += '  </p>';
					adsense	+= '	<p class="Adsense-adLink">';

					if(google_articleTpl == 2)
					{
						adsense	+= '	<a href="' + google_ads[i].url + '" class="link _blank">' + google_ads[i].visible_url + '</a>';
					}

					adsense	+= '	</p>';

					if(	!google_articleTpl
						||
						google_articleTpl == 3
					)
					{
						adsense	+= '	<p class="link">';
						adsense	+= '		<a href="' + google_ads[i].url + '" class="_blank">' + google_ads[i].visible_url + '</a>';
						adsense	+= '	</p>';
					}
					adsense	+= '</div>';
				}
			}
		}

		adsense += '</div>'
				+  '</div>';

		document.write(adsense);
	}
	return;
}

/*
 * Adsense
 *
 * @version 1.0
 */
function google_ad_request_done(google_ads)
{
	return ob_google_ad_request_done(google_ads);
}

/*eslint-enable */
