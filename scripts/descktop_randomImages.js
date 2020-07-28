function imagesBlock(){   
    var images = new Array(    
        ["images/logo_cdate.png","https://track.backtoblack.xyz/click?pid=5875&offer_id=2155"],    
        ["images/logo_deinseitensprung.png","https://track.strawberryworld.xyz/click?pid=5875&offer_id=4877&l=1585665067"],    
       [ "images/logo_emmadchen.png","https://track.strawberryworld.xyz/click?pid=5875&offer_id=3815"],      
        ["images/logo_ficktreffen.png","https://track.backtoblack.xyz/click?pid=5875&offer_id=4147"],   
       [ "images/logo_flirthits_w.png","https://fresleads.go2affise.com/click?pid=5875&offer_id=4533"],    
        ["images/logo_kionti.png","https://track.backtoblack.xyz/click?pid=5875&offer_id=4856"],    
        ["images/logo_lustagenten.png","https://track.cpanda.me/click?pid=5875&offer_id=2372"],      
        ["images/logo_schlampeplatz.png","https://track.backtoblack.xyz/click?pid=5875&offer_id=4793 "],   
        ["images/logo_whatsaffair.png","https://track.backtoblack.xyz/click?pid=5875&offer_id=3795 "],      
        ["images/logo_whatsexy.gif","https://track.backtoblack.xyz/click?pid=5875&offer_id=3798"],    
      );
      var text = new Array(    
        "Reveal secret of real dating in your area!",    
        "Stop dreaming! Register now and get a chance to find your soul mate.",    
        "Find a real partner here! This website use only hand method to check its members.",      
        "Go on sensual meeting and create sweet memories.",   
        "Feel the true spirit of serious relationships.",    
        "It's high time to fall in love. Register now!",    
        "The world's leading dating assistant is right here to find your perfect match",      
        "Let's get this party started! Your soul mate is already in.",   
        "Chat when and where you want!  let your happiness rise up to the sky!",      
        "Long time no serious relationships? Let's fix that!",  
      );
     
      var img = images;   
      
      var txt = text; 
     
      for (var i = 0; i < 3; i++) {    
        
        var a = Math.floor(Math.random() * img.length);  
        var b = Math.floor(Math.random() * txt.length); 
     
        document.write (`
        <tr class="blocTab" id="section_blocTab">
            <td>
                <div>
                    <a href="">                                    
                        <img class="banner"
                            src ='`+img[a][0]+`'
                                class="logo-td" alt="logo" width="170">
                    </a>
                    <p>`+txt[b]+`</p><a
                        href="`+img[a][1]+`"
                        class="btn baner_link"
                        title="See details"><span>See details</span></a>
                </div>
            </td>
        </tr>
                        `);
                      
        img.splice(a,1);    
       
        txt.splice(b,1);  
       
      }; 
         
      return false;
}   
