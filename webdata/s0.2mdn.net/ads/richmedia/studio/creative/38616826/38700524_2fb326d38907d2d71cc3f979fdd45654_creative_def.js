(function() {
  var creativeDefinition = {
    customScriptUrl: '',
    isDynamic: false,
    delayedImpression: false,
    standardEventIds: {
      DISPLAY_TIMER: '72',
      INTERACTION_TIMER: '73',
      INTERACTIVE_IMPRESSION: '74',
      MANUAL_CLOSE: '75',
      BACKUP_IMAGE_IMPRESSION: '76',
      EXPAND_TIMER: '77',
      FULL_SCREEN: '78',
      VIDEO_PLAY: '79',
      VIDEO_VIEW_TIMER: '80',
      VIDEO_COMPLETE: '81',
      VIDEO_INTERACTION: '82',
      VIDEO_PAUSE: '83',
      VIDEO_MUTE: '84',
      VIDEO_REPLAY: '85',
      VIDEO_MIDPOINT: '86',
      VIDEO_STOP: '87',
      VIDEO_UNMUTE: '88',
      DYNAMIC_CREATIVE_IMPRESSION: '',
      HTML5_CREATIVE_IMPRESSION: ''
    },
    exitEvents: [
      {
        name: 'clickTAG',
        reportingId: '22851877',
        url: 'https://www.china.org.cn',
        targetWindow: '_blank',
        windowProperties: ''
      }
    ],
    timerEvents: [
    ],
    counterEvents: [
    ],
    childFiles: [
      {
        name: 'scio_lasttext.png',
        url: '/ads/richmedia/studio/pv2/38616826/20150917091242304/scio_lasttext.png',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'scio_backup.jpg',
        url: '/ads/richmedia/studio/pv2/38616826/20150917091242304/scio_backup.jpg',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'image_2.png',
        url: '/ads/richmedia/studio/pv2/38616826/20150917091242304/image_2.png',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'china_posterframe.jpg',
        url: '/ads/richmedia/studio/pv2/38616826/20150917091242304/china_posterframe.jpg',
        isVideo: false,
        transcodeInformation: null
      }
    ],
    videoFiles: [
      {
        name: 'TCP-SCIO1-030.mp4',
        url: 'https://gcdn.2mdn.net/videoplayback/id/a4ca010f1dcc3b92/itag/15/source/doubleclick/ratebypass/yes/mime/video%2Fmp4/acao/yes/ip/0.0.0.0/ipbits/0/expire/3587516978/sparams/id,itag,source,ratebypass,mime,acao,ip,ipbits,expire/signature/6E8348975B926C7DBF033AD8689017A83659AA1A.6EAC62C709E43004865FEA345FFCB14D959D4494/key/ck2/file/file.mp4',
        isVideo: true,
        streamingUrl: '',
        transcodeInformation: null
      },
      {
        name: 'TCP-SCIO1-030_mp4_MEDIUM.mp4',
        url: 'https://gcdn.2mdn.net/videoplayback/id/a4ca010f1dcc3b92/itag/18/source/doubleclick/ratebypass/yes/acao/yes/ip/0.0.0.0/ipbits/0/expire/3587516978/sparams/id,itag,source,ratebypass,acao,ip,ipbits,expire/signature/2D86ECA58653BA033DD4D09636FEB51CF8B3CE71.865F1991A74EC4E205CD60C5AB387E732A959909/key/ck2/file/file.mp4',
        isVideo: true,
        streamingUrl: '',
        transcodeInformation: {
          sourceFilename: 'tcp-scio1-030.mp4',
          quality: '2',
          mimetype: 'video/mp4',
          isTeaser: true
        }
      }
    ],
    videoEntries: [
      {
        reportingIdentifier: 'gwd-video_1',
        startMuted: false,
        autoBuffer: false,
        streaming: false,
        lowBandwidthVideo: '',
        mediumBandwidthVideo: '',
        highBandwidthVideo: '',
        lowBandwidthFallbackVideo: '',
        mediumBandwidthFallbackVideo: '',
        highBandwidthFallbackVideo: ''
      }
    ],
    primaryAssets: [
      {
        id: '38616387',
        artworkType: 'HTML5',
        displayType: 'BANNER',
        width: '300',
        height: '250',
        servingPath: '/ads/richmedia/studio/pv2/38616826/20150917091242304/index.html',
        zIndex: '1000000',
        customCss: '',
        flashArtworkTypeData: null,
        htmlArtworkTypeData: {
          isTransparent: false,
          sdkVersion: '01_82' // Duplicating sdk version in subsequent field as version format not the same.
        },
        floatingDisplayTypeData: null,
        expandingDisplayTypeData: null,
        imageGalleryTypeData: null,
        pageSettings:null,
layoutsConfig: null,
layoutsApi: null
      }
    ]
  }
  var rendererDisplayType = '';
  rendererDisplayType += 'html_';
  var rendererFormat = 'inpage';
  var rendererName = rendererDisplayType + rendererFormat;

  var creativeId = '80483995477';
  var adId = '0';
  var templateVersion = '200_101';
  var studioObjects = window['studioV2'] = window['studioV2'] || {};
  var creativeObjects = studioObjects['creatives'] = studioObjects['creatives'] || {};
  var creativeKey = [creativeId, adId].join('_');
  var creative = creativeObjects[creativeKey] = creativeObjects[creativeKey] || {};
  creative['creativeDefinition'] = creativeDefinition;
  var adResponses = creative['adResponses'] || [];
  for (var i = 0; i < adResponses.length; i++) {
    adResponses[i].creativeDto && adResponses[i].creativeDto.csiEvents &&
        (adResponses[i].creativeDto.csiEvents['pe'] =
            adResponses[i].creativeDto.csiEvents['pe'] || (+new Date));
  }
  var loadedLibraries = studioObjects['loadedLibraries'] = studioObjects['loadedLibraries'] || {};
  var versionedLibrary = loadedLibraries[templateVersion] = loadedLibraries[templateVersion] || {};
  var typedLibrary = versionedLibrary[rendererName] = versionedLibrary[rendererName] || {};
  if (typedLibrary['bootstrap']) {
    typedLibrary.bootstrap();
  }
})();
