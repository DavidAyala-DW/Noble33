import Script from 'next/script'

export default function AccessiBe() {
  return (
    <>
      <Script id="accessibe">
        {`
          (function(){
              var s    = document.createElement('script');
              var h    = document.querySelector('head') || document.body;
              s.src    = 'https://acsbapp.com/apps/app/dist/js/app.js';
              s.async  = true;
              s.onload = function(){
                  acsbJS.init({
                      statementLink    : '',
                      footerHtml       : '',
                      hideMobile       : false,
                      hideTrigger      : false,
                      disableBgProcess : false,
                      language         : 'en',
                      position         : 'right',
                      leadColor        : '#146FF8',
                      triggerColor     : '#146FF8',
                      triggerRadius    : '50%',
                      triggerPositionX : 'right',
                      triggerPositionY : 'bottom',
                      triggerIcon      : 'people',
                      triggerSize      : 'bottom',
                      triggerOffsetX   : 20,
                      triggerOffsetY   : 20,
                      mobile           : {
                          triggerSize      : 'small',
                          triggerPositionX : 'right',
                          triggerPositionY : 'bottom',
                          triggerOffsetX   : 20,
                          triggerOffsetY   : 20,
                          triggerRadius    : '20'
                      }
                  });
              };
              h.appendChild(s);
          })();
        `}
      </Script>
    </>
  )
}
