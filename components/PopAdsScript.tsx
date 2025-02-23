import Script from "next/script";

export default function PopAds() {
  return (
    <Script
      id="popads-script"
      strategy="afterInteractive" // Runs after the page is interactive
      dangerouslySetInnerHTML={{
        __html: `
          (function(){
            var c=window, l="a6a6a8a084653ec5940f10db180d29f4",
            y=[["siteId",958*168-908*581+5544508],["minBid",0],["popundersPerIP","0"],["delayBetween",0],["default",false],["defaultPerDay",0],["topmostLayer","auto"]],
            x=["d3d3LmRpc3BsYXl2ZXJ0aXNpbmcuY29tL2NlbGRhcmlvbi1hamF4Lm1pbi5jc3M=","ZDNtem9rdHk5NTFjNXcuY2xvdWRmcm9udC5uZXQvcndjdE0vYmpxdWVyeS5tdWx0aS1zZWxlY3QubWluLmpz","d3d3LnR6enZ2b2hudG5sdG52LmNvbS9sZWxkYXJpb24tYWpheC5taW4uY3Nz","d3d3Lmx3ZmFpeGVmaW1qLmNvbS9JL2NqcXVlcnkubXVsdGktc2VsZWN0Lm1pbi5qcw=="],
            q=-1, f, v, n=function(){
              clearTimeout(v);
              q++;
              if(x[q] && !(1766230357000<(new Date).getTime()&&1<q)){
                f=c.document.createElement("script");
                f.type="text/javascript";
                f.async=!0;
                var i=c.document.getElementsByTagName("script")[0];
                f.src="https://"+atob(x[q]);
                f.crossOrigin="anonymous";
                f.onerror=n;
                f.onload=function(){
                  clearTimeout(v);
                  c[l.slice(0,16)+l.slice(0,16)]||n();
                };
                v=setTimeout(n,5000);
                i.parentNode.insertBefore(f,i);
              }
            };
            if(!c[l]){
              try{
                Object.freeze(c[l]=y);
              }catch(e){}
              n();
            }
          })();
        `,
      }}
    />
  );
}
