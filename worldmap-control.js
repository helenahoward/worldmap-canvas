    function DrawMap() {
      var oSettings = {};
      oSettings.id = "worldmap";
      oSettings.bgcolor = "#" + $("input[name=bgcolor]").val();
      oSettings.fgcolor = "#" + $("input[name=fgcolor]").val();
      oSettings.bordercolor = "#" + $("input[name=bordercolor]").val();
      oSettings.borderwidth = $("select[name=border]").val();
      oSettings.padding = $("select[name=padding]").val();
  
      // zoom
      var aZoom = [];
      $("select[name=zoom] option").each(function() {
        if ($(this).attr("selected") == true) {
          aZoom.push( $(this).val() );
        }
      });
      if (aZoom.length > 0) {
        oSettings.zoom = aZoom.join(",");
      }
      
      // detail
      var sDetail = $("select[name=detail]").val();
      if (sDetail != "none") {
        oSettings.detail = {};
        oSettings.detail[sDetail] = "#" + $("input[name=detailcolor]").val();
      }
      
      // draw
      WorldMap(oSettings);
    }
  
    function ExampleMap(sStyle) {
      switch (sStyle) {
        case "batman":
          $("input[name=bgcolor]").val("202720");
          $("input[name=fgcolor]").val("303030");
          $("input[name=bordercolor]").val("585D58");
          SelectBox("border", "1.5");
          SelectBox("padding", "10");
          SelectBox("zoom", "mm,vn,my");
          SelectBox("detail", "vn");
          $("input[name=detailcolor]").val("CE3633");
          break;
        case "bbc":
          $("input[name=bgcolor]").val("bbccdd");
          $("input[name=fgcolor]").val("e8e8e8");
          $("input[name=bordercolor]").val("bababd");
          SelectBox("border", "0.5");
          SelectBox("padding", "10");
          SelectBox("zoom", "ir,tr,sa");
          SelectBox("detail", "iq");
          $("input[name=detailcolor]").val("feeac1");
          break;
        case "economist":
          $("input[name=bgcolor]").val("ccdeeb");
          $("input[name=fgcolor]").val("cccccc");
          $("input[name=bordercolor]").val("7f7e7f");
          SelectBox("border", "0.5");
          SelectBox("padding", "10");
          SelectBox("zoom", "in,pk,lk");
          SelectBox("detail", "in");
          $("input[name=detailcolor]").val("e6acac");
          break;
        case "google":
          $("input[name=bgcolor]").val("99b3cc");
          $("input[name=fgcolor]").val("f2efe9");
          $("input[name=bordercolor]").val("808080");
          SelectBox("border", "0.5");
          SelectBox("padding", "10");
          SelectBox("zoom", "ca,gl,mx,us,pa");
          SelectBox("detail", "none");
          $("input[name=detailcolor]").val("FFFFFF");
          break;
      }
      DrawMap();
    }
  
    function Email() {
      document.write( [ "\">email<\/a>", "net", ".", "joncombe", "@", "website", "<a href=\"mailto:" ].reverse().join("") );
    }
  
    function Init() {
      WorldMap({ id: "worldmap" });
    }
  
    function SelectBox(sName, sValue) {
      $("select[name=" + sName + "] option").removeAttr("selected");
      $.each(sValue.split(","), function() {
        $("select[name=" + sName + "] option[value=" + this + "]").attr("selected", true);
      });
    }

