(function() {
    const fh = document.getElementById('fixed-header');
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 200) {/*スクロールする長さ*/
        fh.classList.add('is-show');
      } else {
        fh.classList.remove('is-show');
      }
    });
  }());



  document.getElementById('getqrInfo').addEventListener('click', () => {
    // 入力された文字列を取得
    var userInput = document.getElementById('isbn').value;
    var query = userInput.split(' ').join('+');
    // QRコードの生成
    (function() {
       var qr = new QRious({
         element: document.getElementById('qr'),
         // 入力した文字列でQRコード生成
         value: query
    });
    qr.background = '#FFF'; //背景色
    qr.backgroundAlpha = 0.8; // 背景の透過率
    qr.foreground = '#000000'; //QRコード自体の色
    qr.foregroundAlpha = 9.0; //QRコード自体の透過率
    qr.level = 'L'; // QRコードの誤り訂正レベル
    qr.size = 140; // QRコードのサイズ
       // QRコードをflexboxで表示
       document.getElementById('qrOutput').style.display = 'flex';
    })();
  // // png出力用コード
  // var cvs = document.getElementById("qr");
  // var png = cvs.toDataURL();
  // document.getElementById("newImg").src = png;
  
  });


  // document.querySelectorAll("button[data-role='saveimage']").forEach(v => v.addEventListener("click", async (e) => {
  //   const imgbase = document.getElementById("imgbase");
  //   const dl = document.createElement("a");
  //   dl.href = await domtoimage.toPng(imgbase, {
  //     width: imgbase.clientWidth,
  //     height: imgbase.clientHeight
  //   });
  //   dl.download="savefile.png";
  //   dl.click();
  // }));

  function downloadElAsPng() {
    const el = document.querySelector("#imgbase");
    if (!el) {
      console.error("要素が見つかりませんでした。");
      return;
    }
  
    html2canvas(el).then((canvasEl) => {
      const aEl = document.createElement("a");
      aEl.href = canvasEl.toDataURL("image/png");
      aEl.download = "result.png";
      aEl.click();
    });
  };
  
  downloadElAsPng();