angular.module('woodshop').service('mainService', function(){

    this.pinInfo = [{
        name: 'Walnut Rolling Pin',
        image: "../public/images/walnutpin.jpg",
        desc: '<p>Your dough deserves the best rolling pin, and you\'ve found it with this hand turned, solid wood rolling pin. Crafted from beautiful walnut, it is not only functional but is the kind of rolling pin you\'ll want to have on display. Perfect for doughs, fondants, pastas, etc, the heft of this solid pin allows you to really feel out the perfect dough for your project.</p>\
        <p>This column style rolling pin measures approximately 20-22 inches long and is 2 inches in diameter throughout. It makes the perfect addition to any kitchen. Since each pin is made to order, sizes and actual grain will vary slightly, ensuring that you truly get a one-of-a-kind item.</p>\
        <p>Walnut is a beautiful hard wood with dense grain, making it perfect for a rolling pin. Walnut can vary from a lighter brown to a dark brown and has figured patterns and streaks throughout.</p>\
        <p>It\'s the perfect gift for Christmas, Mother\'s Day, Father\'s Day, birthdays, housewarmings, weddings, showers or any occasion.</p> ',
        id: 1,
        price: 49,
        button: '<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">\
                 <input type="hidden" name="cmd" value="_s-xclick">\
                 <input type="hidden" name="hosted_button_id" value="T7T8WEYYC5D3L">\
                 <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">\
                  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">\
                </form>'

    }, {
        name: 'Maple Rolling Pin',
        image: "../public/images/maplepin.jpg",
        desc: '<p>Your dough deserves the best rolling pin, and you\'ve found it with this hand turned, solid wood rolling pin. Crafted from beautiful maple, it is not only functional but is the kind of rolling pin you\'ll want to have on display. Perfect for doughs, fondants, pastas, etc, the heft of this solid pin allows you to really feel out the perfect dough for your project.</p>\
        <p>This column style rolling pin measures approximately 20-22 inches long and is 2 inches in diameter throughout. It makes the perfect addition to any kitchen. Since each pin is made to order, sizes and actual grain will vary slightly, ensuring that you truly get a one-of-a-kind item.</p>\
        <p>Maple is a beautiful hard wood with dense grain, making them perfect for the kitchen. It is a cream colored wood that has light figured patterns and streaks throughout.</p>\
        <p>It\'s the perfect gift for Christmas, Mother\'s Day, Father\'s Day, birthdays, housewarmings, weddings, showers or any occasion.</p> ',
        id: 2,
        price: 49,
        button:'<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">\
                <input type="hidden" name="cmd" value="_s-xclick">\
                <input type="hidden" name="hosted_button_id" value="4D6NWJQVTXQSU">\
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">\
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">\
                </form>'
    },{
        name: 'French Style Walnut Rolling Pin',
        image: "../public/images/frenchwalnutpin.jpg",
        desc:
        '<p>Your dough deserves the best rolling pin, and you have found it with this hand turned, solid wood rolling pin. Crafted from beautiful walnut, it is not only functional but is the kind of rolling pin you will want to have on display. Perfect for doughs, fondants, pastas, etc, the heft of this solid pin allows you to really feel out the perfect dough for your project.</p>\
         <p>These french style rolling pins measure approximately 20-22 inches long and are 2 inches in diameter, tapering at the ends with decorative beads carved in. They make the perfect addition to any kitchen. Since each pin is made to order, sizes and actual grain will vary slightly, ensuring that you truly get a one-of-a-kind item.</p>\
          <p>Walnut is a beautiful hard wood with dense grain, making it perfect for a rolling pin. Walnut can vary from a lighter brown to a dark brown and has figured patterns and streaks throughout.</p>\
          <p>It is the perfect gift for Christmas, Mothers Day, Fathers Day, birthdays, housewarmings, weddings, showers or any occasion.</p>',
        id: 3,
        price: 49,
        button: '<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">\
                 <input type="hidden" name="cmd" value="_s-xclick">\
                <input type="hidden" name="hosted_button_id" value="QMQ33PY6LKEEA">\
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">\
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">\
                </form>'
    },{
        name: 'French Style Maple Rolling Pin',
        image: "../public/images/frenchmaplepin.jpg",
        desc: '<p>Your dough deserves the best rolling pin, and you have found it with this hand turned, solid wood rolling pin. Crafted from hard maple, it is not only functional but is the kind of rolling pin you will want to have on display. Perfect for doughs, fondants, pastas, etc, the heft of this solid pin allows you to really feel out the perfect dough for your project.</p>\
        <p>This french style rolling pin measures approximately 20-22 inches long and is 2 inches in diameter, tapering at the ends with decorative beads carved in. It makes the perfect addition to any kitchen. Since each pin is made to order, sizes and actual grain will vary slightly, ensuring that you truly get a one-of-a-kind item.<p>\
         <p>Maple is a beautiful hard wood with dense grain, making them perfect for the kitchen. It is a cream colored wood that has light figured patterns and streaks throughout.</p>\
          <p>It is the perfect gift for Christmas, Mother\'s Day, Father\'s Day, birthdays, housewarmings, weddings, showers or any occasion. </p>',
        id: 4,
        price: 49,
        button: '<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">\
                 <input type="hidden" name="cmd" value="_s-xclick">\
                  <input type="hidden" name="hosted_button_id" value="DB7ZWVZ77CYRY">\
                  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">\
                  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">\
                  </form>'
      },{
        name: 'Big Roller Rolling Pin',
        image: "../public/images/bigroller.jpg",
        desc: '<p>Your dough deserves the best rolling pin, and you\'ve found it with this hand turned, solid wood rolling pin. Crafted from hard maple, walnut and cherry wood, it is not only functional but is the kind of rolling pin you\'ll want to have on display. Perfect for doughs, fondants, pastas, etc, the heft of this solid pin allows you to really feel out the perfect dough for your project.</p>\
        <p>This big roller rolling pin measures approximately 21.5 inches long and is 3 inches in diameter in the center portion. It makes the perfect addition to any kitchen. Since each pin is made to order, sizes and actual grain will vary slightly, ensuring that you truly get a one-of-a-kind item.<p>\
         <p>Walnut, cherry and maple are beautiful hard woods with dense grains, making them perfect for the kitchen. Walnut is a beautiful hard wood with dense grain, making it perfect for a rolling pin. Walnut can vary from a lighter brown to a dark brown and has figured patterns and streaks throughout. Cherry can vary from a lighter, golden color to a deeper reddish brown and has figured patterns and streaks throughout. Maple is a cream colored wood that also has light patterns throughout.</p>\
          <p>It is the perfect gift for Christmas, Mother\'s Day, Father\'s Day, birthdays, housewarmings, weddings, showers or any occasion. </p>',
        id: 5,
        price: 60,
        button: '<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">\
                 <input type="hidden" name="cmd" value="_s-xclick">\
                  <input type="hidden" name="hosted_button_id" value="3KCP3CD33RSPN">\
                  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">\
                  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">\
                  </form>'
      },{
        name: 'Mini Walnut Rolling Pin',
        image: "../public/images/mini-walnut-pin.jpg",
        desc: '<p>Your dough deserves the best rolling pin, and you have found it with this hand turned, solid wood rolling pin. Crafted from walnut, it is not only functional but is the kind of rolling pin you will want to have on display. Perfect for doughs, fondants, pastas, etc, the heft of this solid pin allows you to really feel out the perfect dough for your project.</p>\
        <p>Perfect for smaller jobs or when you have smaller hands helping, this quick rolling pin measures approximately 11 inches long and is ~2 inches in diameter throughout. It makes the perfect addition to any kitchen. Since each pin is made to order, sizes and actual grain will vary slightly, ensuring that you truly get a one-of-a-kind item.</p>\
        <p>Walnut is a beautiful hard wood with dense grain, making it perfect for a rolling pin. Walnut can vary from a lighter brown to a dark brown and has figured patterns and streaks throughout.</p>\
        <p>It is the perfect gift for Christmas, Mothers Day, Fathers Day, birthdays, housewarmings, weddings, showers or any occasion.</p>',
        id: 6,
        price: 32,
        button: '<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">\
                 <input type="hidden" name="cmd" value="_s-xclick">\
                  <input type="hidden" name="hosted_button_id" value="BHTCA8BGHET4G">\
                  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">\
                  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">\
                  </form>'
      },{
        name: 'Mini Birdseye Maple Rolling Pin',
        image: "../public/images/birdseye-pin.jpg",
        desc: '<p>Your dough deserves the best rolling pin, and you have found it with this hand turned, solid wood rolling pin. Crafted from birdseye maple, it is not only functional but is the kind of rolling pin you will want to have on display. Perfect for doughs, fondants, pastas, etc, the heft of this solid pin allows you to really feel out the perfect dough for your project.</p>\
        <p>Perfect for smaller jobs or when you have smaller hands helping, this quick rolling pin measures approximately 11 inches long and is ~2 inches in diameter throughout. It makes the perfect addition to any kitchen. Since each pin is made to order, sizes and actual grain will vary slightly, ensuring that you truly get a one-of-a-kind item.</p>\
        <p>Birdseye maple is a beautiful hard wood with dense grain, making it perfect for a rolling pin. It is a cream colored wood that has a distinctive pattern that resembles tiny, swirling eyes disrupting the smooth lines of grain. Each item will be slightly different and unique as they are made to order.</p>\
        <p>It is the perfect gift for Christmas, Mothers Day, Fathers Day, birthdays, housewarmings, weddings, showers or any occasion.</p>',
        id: 7,
        price: 32,
        button: '<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">\
                 <input type="hidden" name="cmd" value="_s-xclick">\
                <input type="hidden" name="hosted_button_id" value="X6SRKMLMCRVA6">\
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">\
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">\
                </form>'
      },{
        name: 'Mini Cherry Rolling Pin',
        image: "../public/images/cherry-pin.jpg",
        desc: '<p>Your dough deserves the best rolling pin, and you have found it with this hand turned, solid wood rolling pin. Crafted from cherry wood, it is not only functional but is the kind of rolling pin you will want to have on display. Perfect for doughs, fondants, pastas, etc, the heft of this solid pin allows you to really feel out the perfect dough for your project.</p>\
        <p>Perfect for smaller jobs or when you have smaller hands helping, this quick rolling pin measures approximately 11 inches long and is ~2 inches in diameter throughout. It makes the perfect addition to any kitchen. Since each pin is made to order, sizes and actual grain will vary slightly, ensuring that you truly get a one-of-a-kind item.</p>\
        <p>Cherry is a beautiful hard wood with dense grain, making it perfect for a rolling pin. It can vary from a lighter, golden color to a deeper reddish brown and has figured patterns and streaks throughout. Each item will be slightly different and unique as they are made to order.</p>\
        <p>It is the perfect gift for Christmas, Mothers Day, Fathers Day, birthdays, housewarmings, weddings, showers or any occasion.</p>',
        id: 8,
        price: 32,
        button: '<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">\
                 <input type="hidden" name="cmd" value="_s-xclick">\
                <input type="hidden" name="hosted_button_id" value="4LLD9ED8FTTCU">\
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">\
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">\
                </form>'

    }]

    this.shavingsetInfo = [{
        name: 'Walnut Shaving Set',
        image: "../public/images/walnutshave.jpg",
        desc: '<p>Whether you\'re new to wet shaving or just looking to upgrade, with this shaving set you\'ll be well on your way to the best shaving experience of your life.</p>\
        <p>Handmade from walnut wood, this heavy duty set comes with your choice of razor (Double-edged Safety Razor, Gillette Fusion or Mach 3), a pure badger hair shaving brush and a stand. All items have chrome accents and are finished with super glue for an extremely solid finish. They are polished to a high gloss for a durable, lasting look that you\'ll be able to enjoy for years to come. Please note that blades are not included.</p>\
        <p>Choose between the premium badger hair brush, which offers genuine, high grade badger hair for a great shave every time. Or upgrade to super silvertip, which is made from some of the most expensive and rare badger hair available. The tips are naturally white and it tends to hold large amounts of water while being incredibly soft.</p>\
        <p>Walnut is a beautiful hard wood with dense grain, making it perfect for a razor set. Walnut can vary from a lighter brown to a dark brown and has figured patterns and streaks throughout.Each item will be slightly different and unique as they are made to order.</p>\
        <p>It\'s the perfect gift for Christmas, Father\'s Day, Groomsmen, birthdays or any occasion. Each shaving set comes in a premium gift box, ready to present.</p>',
        id: 101,
        price: 129,
        button: '<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">\
                 <input type="hidden" name="cmd" value="_s-xclick">\
                 <input type="hidden" name="hosted_button_id" value="SPZHVYE9MJWXA">\
                 <table>\
                 <tr><td><input type="hidden" name="on0" value="Brush">Brush Style</td></tr><tr><td><select name="os0">\
	               <option value="Premium Badger Hair">Premium Badger Hair $129.00 USD</option>\
	               <option value="Super Silvertip">Super Silvertip $159.00 USD</option>\
                 </select> </td></tr>\
                 <tr><td><input type="hidden" name="on1" value="Razor Style">Razor Style</td></tr><tr><td><select name="os1">\
              	<option value="Safety Razor">Safety Razor </option>\
	              <option value="Mach 3">Mach 3 </option>\
                	<option value="Fusion">Fusion </option>\
                 </select> </td></tr>\
                 </table><br>\
                 <input type="hidden" name="currency_code" value="USD">\
                 <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">\
                 <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">\
                 </form>'

    }, {
      name: 'Marblewood Shaving Set',
      image: "../public/images/marblewood.jpg",
      desc: '<p>Whether you\'re new to wet shaving or just looking to upgrade, with this shaving set you\'ll be well on your way to the best shaving experience of your life.</p>\
      <p>Handmade from marblewood, this heavy duty set comes with your choice of razor (Double-edged Safety Razor, Gillette Fusion or Mach 3), a pure badger hair shaving brush and a stand. All items have chrome accents and are finished with super glue for an extremely solid finish. They are polished to a high gloss for a durable, lasting look that you\'ll be able to enjoy for years to come. Please note that blades are not included.</p>\
      <p>Choose between the premium badger hair brush, which offers genuine, high grade badger hair for a great shave every time. Or upgrade to super silvertip, which is made from some of the most expensive and rare badger hair available. The tips are naturally white and it tends to hold large amounts of water while being incredibly soft.</p>\
      <p>Marblewood is a beautiful golden wood with dramatic brown streaks throughout. It comes from South America. Each piece has its own figuring, giving each item a unique look. As this item is made to order, it may vary slightly from the pictures as yours will be a created from a one-of-a-kind piece of wood with its own unique texture and grain.</p>\
      <p>It\'s the perfect gift for Christmas, Father\'s Day, Groomsmen, birthdays or any occasion. Each shaving set comes in a premium gift box, ready to present.</p>',
      id: 102,
      price: 129,
      button: '<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">\
               <input type="hidden" name="cmd" value="_s-xclick">\
               <input type="hidden" name="hosted_button_id" value="8F9AJ2HK2MUKG">\
               <table>\
               <tr><td><input type="hidden" name="on0" value="Brush">Brush Style</td></tr><tr><td><select name="os0">\
               <option value="Premium Badger Hair">Premium Badger Hair $129.00 USD</option>\
               <option value="Super Silvertip">Super Silvertip $159.00 USD</option>\
               </select> </td></tr>\
               <tr><td><input type="hidden" name="on1" value="Razor Style">Razor Style</td></tr><tr><td><select name="os1">\
              <option value="Safety Razor">Safety Razor </option>\
              <option value="Mach 3">Mach 3 </option>\
                <option value="Fusion">Fusion </option>\
               </select> </td></tr>\
               </table><br>\
               <input type="hidden" name="currency_code" value="USD">\
               <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">\
               <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">\
               </form>'

    },{
      name: 'Birdseye Maple Shaving Set',
      image: "../public/images/birdseye.jpg",
      desc: '<p>Whether you\'re new to wet shaving or just looking to upgrade, with this shaving set you\'ll be well on your way to the best shaving experience of your life.</p>\
      <p>Handmade from birdseye maple, this heavy duty set comes with your choice of razor (Double-edged Safety Razor, Gillette Fusion or Mach 3), a pure badger hair shaving brush and a stand. All items have chrome accents and are finished with super glue for an extremely solid finish. They are polished to a high gloss for a durable, lasting look that you\'ll be able to enjoy for years to come. Please note that blades are not included.</p>\
      <p>Choose between the premium badger hair brush, which offers genuine, high grade badger hair for a great shave every time. Or upgrade to super silvertip, which is made from some of the most expensive and rare badger hair available. The tips are naturally white and it tends to hold large amounts of water while being incredibly soft.</p>\
      <p>Birdseye maple is a beautiful hard wood with dense grain, making it perfect for a shaving set. It is a cream colored wood that has a distinctive pattern that resembles tiny, swirling eyes disrupting the smooth lines of grain. Each item will be slightly different and unique as they are made to order.</p>\
      <p>It\'s the perfect gift for Christmas, Father\'s Day, Groomsmen, birthdays or any occasion. Each shaving set comes in a premium gift box, ready to present.</p>',
      id: 103,
      price: 129,
      button: '<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">\
               <input type="hidden" name="cmd" value="_s-xclick">\
               <input type="hidden" name="hosted_button_id" value="BC6DAY3NXBYVC">\
               <table>\
               <tr><td><input type="hidden" name="on0" value="Brush">Brush Style</td></tr><tr><td><select name="os0">\
               <option value="Premium Badger Hair">Premium Badger Hair $129.00 USD</option>\
               <option value="Super Silvertip">Super Silvertip $159.00 USD</option>\
               </select> </td></tr>\
               <tr><td><input type="hidden" name="on1" value="Razor Style">Razor Style</td></tr><tr><td><select name="os1">\
              <option value="Safety Razor">Safety Razor </option>\
              <option value="Mach 3">Mach 3 </option>\
                <option value="Fusion">Fusion </option>\
               </select> </td></tr>\
               </table><br>\
               <input type="hidden" name="currency_code" value="USD">\
               <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">\
               <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">\
               </form>'

    },{
      name: 'Caribbean Swirl Shaving Set',
      image: "../public/images/blue.jpg",
      desc: '<p>Whether you\'re new to wet shaving or just looking to upgrade, with this shaving set you\'ll be well on your way to the best shaving experience of your life.</p>\
      <p>Handmade from birdseye maple, this heavy duty set comes with your choice of razor (Double-edged Safety Razor, Gillette Fusion or Mach 3), a pure badger hair shaving brush and a stand. All items have chrome accents and are finished with super glue for an extremely solid finish. They are polished to a high gloss for a durable, lasting look that you\'ll be able to enjoy for years to come. Please note that blades are not included.</p>\
      <p>Choose between the premium badger hair brush, which offers genuine, high grade badger hair for a great shave every time. Or upgrade to super silvertip, which is made from some of the most expensive and rare badger hair available. The tips are naturally white and it tends to hold large amounts of water while being incredibly soft.</p>\
      <p>This eye-catching Caribbean swirl acrylic is not only a beautiful, vibrant blue with swirls throughout, but is also extremely durable. It will be a conversation piece as well as the perfect addition to any countertop.</p>\
      <p>It\'s the perfect gift for Christmas, Father\'s Day, Groomsmen, birthdays or any occasion. Each shaving set comes in a premium gift box, ready to present.</p>',
      id: 104,
      price: 129,
      button: '<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">\
               <input type="hidden" name="cmd" value="_s-xclick">\
               <input type="hidden" name="hosted_button_id" value="6MNLJJYNW3G8G">\
               <table>\
               <tr><td><input type="hidden" name="on0" value="Brush">Brush Style</td></tr><tr><td><select name="os0">\
               <option value="Premium Badger Hair">Premium Badger Hair $129.00 USD</option>\
               <option value="Super Silvertip">Super Silvertip $159.00 USD</option>\
               </select> </td></tr>\
               <tr><td><input type="hidden" name="on1" value="Razor Style">Razor Style</td></tr><tr><td><select name="os1">\
              <option value="Safety Razor">Safety Razor </option>\
              <option value="Mach 3">Mach 3 </option>\
                <option value="Fusion">Fusion </option>\
               </select> </td></tr>\
               </table><br>\
               <input type="hidden" name="currency_code" value="USD">\
               <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">\
               <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">\
               </form>'
      },{
        name: 'Spalted Tamarind Shaving Set',
        image: "../public/images/spalted.jpg",
        desc: '<p>Whether you\'re new to wet shaving or just looking to upgrade, with this shaving set you\'ll be well on your way to the best shaving experience of your life.</p>\
        <p>Handmade from spalted tamarind wood, this heavy duty set comes with your choice of razor (Double-edged Safety Razor, Gillette Fusion or Mach 3), a pure badger hair shaving brush and a stand. All items have chrome accents and are finished with super glue for an extremely solid finish. They are polished to a high gloss for a durable, lasting look that you\'ll be able to enjoy for years to come. Please note that blades are not included.</p>\
        <p>Choose between the premium badger hair brush, which offers genuine, high grade badger hair for a great shave every time. Or upgrade to super silvertip, which is made from some of the most expensive and rare badger hair available. The tips are naturally white and it tends to hold large amounts of water while being incredibly soft.</p>\
        <p>Spalted tamarind wood is a beautiful light wood with dramatic black stripes & patterns that comes from tropical Africa. Each piece has its own figuring, giving each item a unique look. As this item is made to order, it may vary slightly from the pictures as yours will be a created from a one-of-a-kind piece of wood with its own unique texture and grain.</p>\
        <p>It\'s the perfect gift for Christmas, Father\'s Day, Groomsmen, birthdays or any occasion. Each shaving set comes in a premium gift box, ready to present.</p>',
        id: 105,
        price: 129,
        button: '<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">\
                 <input type="hidden" name="cmd" value="_s-xclick">\
                 <input type="hidden" name="hosted_button_id" value="DSSP8B7QE7JNJ">\
                 <table>\
                 <tr><td><input type="hidden" name="on0" value="Brush">Brush Style</td></tr><tr><td><select name="os0">\
                 <option value="Premium Badger Hair">Premium Badger Hair $129.00 USD</option>\
                 <option value="Super Silvertip">Super Silvertip $159.00 USD</option>\
                 </select> </td></tr>\
                 <tr><td><input type="hidden" name="on1" value="Razor Style">Razor Style</td></tr><tr><td><select name="os1">\
                <option value="Safety Razor">Safety Razor </option>\
                <option value="Mach 3">Mach 3 </option>\
                  <option value="Fusion">Fusion </option>\
                 </select> </td></tr>\
                 </table><br>\
                 <input type="hidden" name="currency_code" value="USD">\
                 <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">\
                 <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">\
                 </form>'
      },{
        name: 'Cherry Shaving Set',
        image: "../public/images/cherry.jpg",
        desc: '<p>Whether you\'re new to wet shaving or just looking to upgrade, with this shaving set you\'ll be well on your way to the best shaving experience of your life.</p>\
        <p>Handmade from cherry wood, this heavy duty set comes with your choice of razor (Double-edged Safety Razor, Gillette Fusion or Mach 3), a pure badger hair shaving brush and a stand. All items have chrome accents and are finished with super glue for an extremely solid finish. They are polished to a high gloss for a durable, lasting look that you\'ll be able to enjoy for years to come. Please note that blades are not included.</p>\
        <p>Choose between the premium badger hair brush, which offers genuine, high grade badger hair for a great shave every time. Or upgrade to super silvertip, which is made from some of the most expensive and rare badger hair available. The tips are naturally white and it tends to hold large amounts of water while being incredibly soft.</p>\
        <p>Cherry is a beautiful hard wood with dense grain, making it perfect for shaving sets. Cherry can vary from a lighter, golden color to a deeper reddish brown and has figured patterns and streaks throughout. Please note that each item is made to order, so they will each vary slightly in color and grain as each piece of wood is unique, making it really one-of-a-kind.</p>\
        <p>It\'s the perfect gift for Christmas, Father\'s Day, Groomsmen, birthdays or any occasion. Each shaving set comes in a premium gift box, ready to present.</p>',
        id: 106,
        price: 129,
        button: '<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">\
                 <input type="hidden" name="cmd" value="_s-xclick">\
                 <input type="hidden" name="hosted_button_id" value="LWXGQ26J7F7EJ">\
                 <table>\
                 <tr><td><input type="hidden" name="on0" value="Brush">Brush Style</td></tr><tr><td><select name="os0">\
                 <option value="Premium Badger Hair">Premium Badger Hair $129.00 USD</option>\
                 <option value="Super Silvertip">Super Silvertip $159.00 USD</option>\
                 </select> </td></tr>\
                 <tr><td><input type="hidden" name="on1" value="Razor Style">Razor Style</td></tr><tr><td><select name="os1">\
                <option value="Safety Razor">Safety Razor </option>\
                <option value="Mach 3">Mach 3 </option>\
                  <option value="Fusion">Fusion </option>\
                 </select> </td></tr>\
                 </table><br>\
                 <input type="hidden" name="currency_code" value="USD">\
                 <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">\
                 <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">\
                 </form>'
     },{
        name: 'Rosewood Shaving Set',
        image: "../public/images/rosewood-shaving-set.jpg",
        desc: '<p>Whether you\'re new to wet shaving or just looking to upgrade, with this shaving set you\'ll be well on your way to the best shaving experience of your life.</p>\
        <p>Handmade from Honduran rosewood, this heavy duty set comes with your choice of razor (Double-edged Safety Razor, Gillette Fusion or Mach 3), a pure badger hair shaving brush and a stand. All items have chrome accents and are finished with super glue for an extremely solid finish. They are polished to a high gloss for a durable, lasting look that you\'ll be able to enjoy for years to come. Please note that blades are not included.</p>\
        <p>Choose between the premium badger hair brush, which offers genuine, high grade badger hair for a great shave every time. Or upgrade to super silvertip, which is made from some of the most expensive and rare badger hair available. The tips are naturally white and it tends to hold large amounts of water while being incredibly soft.</p>\
        <p>Rosewood is a beautiful hard wood with dense grain, making it perfect for shaving sets. Rosewood can vary from a lighter brown to a deeper brownish purple and has figured patterns and streaks throughout. Please note that each item is made to order, so they will each vary slightly in color and grain as each piece of wood is unique, making it really one-of-a-kind. </p>\
        <p>It\'s the perfect gift for Christmas, Father\'s Day, Groomsmen, birthdays or any occasion. Each shaving set comes in a premium gift box, ready to present.</p>',
        id: 107,
        price: 129,
        button: '<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">\
                <input type="hidden" name="cmd" value="_s-xclick">\
                <input type="hidden" name="hosted_button_id" value="ZH9D3HYKVBJUU">\
                <table>\
                <tr><td><input type="hidden" name="on0" value="Brush">Brush Style</td></tr><tr><td><select name="os0">\
                <option value="Premium Badger Hair">Premium Badger Hair $129.00 USD</option>\
                <option value="Super Silvertip">Super Silvertip $159.00 USD</option>\
                </select> </td></tr>\
                <tr><td><input type="hidden" name="on1" value="Razor Style">Razor Style</td></tr><tr><td><select name="os1">\
                <option value="Safety Razor">Safety Razor </option>\
                <option value="Mach 3">Mach 3 </option>\
                 <option value="Fusion">Fusion </option>\
                </select> </td></tr>\
                </table><br>\
                <input type="hidden" name="currency_code" value="USD">\
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">\
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">\
                </form>'
    },{
       name: 'Padauk Shaving Set',
       image: "../public/images/padauk-set.jpg",
       desc: '<p>Whether you\'re new to wet shaving or just looking to upgrade, with this shaving set you\'ll be well on your way to the best shaving experience of your life.</p>\
       <p>Handmade from padauk wood, this heavy duty set comes with your choice of razor (Double-edged Safety Razor, Gillette Fusion or Mach 3), a pure badger hair shaving brush and a stand. All items have chrome accents and are finished with super glue for an extremely solid finish. They are polished to a high gloss for a durable, lasting look that you\'ll be able to enjoy for years to come. Please note that blades are not included.</p>\
       <p>Choose between the premium badger hair brush, which offers genuine, high grade badger hair for a great shave every time. Or upgrade to super silvertip, which is made from some of the most expensive and rare badger hair available. The tips are naturally white and it tends to hold large amounts of water while being incredibly soft.</p>\
       <p>Padauk wood is a deep red wood with interesting stripes & patterns that comes from Africa. Each piece has its own figuring, giving each item a unique look. Each piece has its own figuring, giving each item a unique look. As this item is made to order, it may vary slightly from the pictures as yours will be a created from a one-of-a-kind piece of wood with its own unique texture and grain. </p>\
       <p>It\'s the perfect gift for Christmas, Father\'s Day, Groomsmen, birthdays or any occasion. Each shaving set comes in a premium gift box, ready to present.</p>',
       id: 107,
       price: 129,
       button: '<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">\
               <input type="hidden" name="cmd" value="_s-xclick">\
               <input type="hidden" name="hosted_button_id" value="QQHYSCEBKX7TQ">\
               <table>\
               <tr><td><input type="hidden" name="on0" value="Brush">Brush Style</td></tr><tr><td><select name="os0">\
               <option value="Premium Badger Hair">Premium Badger Hair $129.00 USD</option>\
               <option value="Super Silvertip">Super Silvertip $159.00 USD</option>\
               </select> </td></tr>\
               <tr><td><input type="hidden" name="on1" value="Razor Style">Razor Style</td></tr><tr><td><select name="os1">\
               <option value="Safety Razor">Safety Razor </option>\
               <option value="Mach 3">Mach 3 </option>\
                <option value="Fusion">Fusion </option>\
               </select> </td></tr>\
               </table><br>\
               <input type="hidden" name="currency_code" value="USD">\
               <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">\
               <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">\
               </form>'

    }]

    this.cuttingBoards = [{
        name: 'Solid Walnut Cutting Board',
        image: "../public/images/walnut-board.jpg",
        desc: '<p>Whether you need a quick cutting board to slice up some fruit or a beautiful serving platter for a cheese ball and crackers, this walnut board is exactly what you\'re looking for. Made from a solid piece of walnut wood and sanded to a smooth finish, it is just the right board for anything you need.</p>\
        <p>This cutting board measures approximately 11 inches by 7 inches and is 1 inch thick with rounded edges. It makes the perfect addition to any kitchen. Leave it on the counter for display or tuck it away easily for use later.</p>\
        <p>Walnut is a beautiful hard wood with dense grain, making it perfect for a rolling pin. Walnut can vary from a lighter brown to a dark brown and has figured patterns and streaks throughout.</p>\
        <p>It\'s the perfect gift for Christmas, Mother\'s Day, Father\'s Day, birthdays, housewarmings, weddings, showers or any occasion.</p> ',
        id: 201,
        price: 29,
        button: '<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">\
                 <input type="hidden" name="cmd" value="_s-xclick">\
                 <input type="hidden" name="hosted_button_id" value="4P686NV3UMBKY">\
                 <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">\
                  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">\
                </form>'

},{
        name: 'Solid Maple Cutting Board',
        image: "../public/images/maple-board.jpg",
        desc: '<p>Whether you need a quick cutting board to slice up some fruit or a beautiful serving platter for a cheese ball and crackers, this maple board is exactly what you\'re looking for. Made from a solid piece of maple wood and sanded to a smooth finish, it is just the right board for anything you need.</p>\
        <p>This cutting board measures approximately 11 inches by 7 inches and is 1 inch thick with rounded edges. It makes the perfect addition to any kitchen. Leave it on the counter for display or tuck it away easily for use later.</p>\
        <p>Maple is a beautiful hard wood with dense grain, making it perfect for the kitchen. Maple is a cream colored wood that also has light patterns throughout. Please note that each item is made to order, so they will each vary slightly in color and grain as each piece of wood is unique, making it really one-of-a-kind. </p>\
        <p>It\'s the perfect gift for Christmas, Mother\'s Day, Father\'s Day, birthdays, housewarmings, weddings, showers or any occasion.</p> ',
        id: 202,
        price: 29,
        button: '<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">\
                 <input type="hidden" name="cmd" value="_s-xclick">\
                 <input type="hidden" name="hosted_button_id" value="RYWAUWMH4SDY2">\
                 <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">\
                  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">\
                </form>'

},{
        name: 'Solid Cherry Cutting Board',
        image: "../public/images/cherry-board.jpg",
        desc: '<p>Whether you need a quick cutting board to slice up some fruit or a beautiful serving platter for a cheese ball and crackers, this cherry board is exactly what you\'re looking for. Made from a solid piece of cherry wood and sanded to a smooth finish, it is just the right board for anything you need.</p>\
        <p>This cutting board measures approximately 11 inches by 7 inches and is 1 inch thick with rounded edges. It makes the perfect addition to any kitchen. Leave it on the counter for display or tuck it away easily for use later.</p>\
        <p>Cherry is a beautiful hard wood with dense grain, making it perfect for the kitchen. Cherry can vary from a lighter, golden color to a deeper reddish brown and has figured patterns and streaks throughout. Please note that each item is made to order, so they will each vary slightly in color and grain as each piece of wood is unique, making it really one-of-a-kind.  </p>\
        <p>It\'s the perfect gift for Christmas, Mother\'s Day, Father\'s Day, birthdays, housewarmings, weddings, showers or any occasion.</p> ',
        id: 203,
        price: 29,
        button: '<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">\
                 <input type="hidden" name="cmd" value="_s-xclick">\
                 <input type="hidden" name="hosted_button_id" value="U3WKM9PYA8HKA">\
                 <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">\
                  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">\
                </form>'
  }]
  this.shavingStands = [{
      name: 'Rosewood Shaving Stand',
      image: "../public/images/rosewood-stand.jpg",
      desc: '<p>Shaving stand for brush and razor. Whether you\'re new to wet shaving or just looking to upgrade, this shaving stand is the perfect way to display and store your shaving brush and razor.</p>\
      <p>Handmade from Honduras rosewood, this heavy duty shaving stand is the perfect addition to your shaving set. It has chrome accents, a weighted base and is finished with super glue for an extremely solid finish. It is polished to a high gloss for a durable, lasting look that you\'ll be able to enjoy for years to come. Just add your brush and razor (or choose from ours), and you\'re ready to shave.</p>\
      <p>Rosewood is a beautiful hard wood with dense grain, making it perfect for shaving sets. Rosewood can vary from a lighter brown to a deeper brownish purple and has figured patterns and streaks throughout. Please note that each item is made to order, so they will each vary slightly in color and grain as each piece of wood is unique, making it really one-of-a-kind. </p>\
      <p>It\'s the perfect gift for Christmas, Mother\'s Day, Father\'s Day, birthdays, housewarmings, weddings, showers or any occasion.</p> ',
      id: 301,
      price: 49,
      button: '<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">\
               <input type="hidden" name="cmd" value="_s-xclick">\
               <input type="hidden" name="hosted_button_id" value="4P686NV3UMBKY">\
               <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">\
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">\
              </form>'
},{
      name: 'Birdseye Maple Shaving Stand',
      image: "../public/images/maple-stand.jpg",
      desc: '<p>Shaving stand for brush and razor. Whether you\'re new to wet shaving or just looking to upgrade, this shaving stand is the perfect way to display and store your shaving brush and razor.</p>\
      <p>Handmade from birdseye maple wood, this heavy duty shaving stand is the perfect addition to your shaving set. It has chrome accents, a weighted base and is finished with super glue for an extremely solid finish. It is polished to a high gloss for a durable, lasting look that you\'ll be able to enjoy for years to come. Just add your brush and razor (or choose from ours), and you\'re ready to shave.</p>\
      <p>Birdseye maple is a beautiful hard wood with dense grain, making it perfect for a shaving set. It is a cream colored wood that has a distinctive pattern that resembles tiny, swirling eyes disrupting the smooth lines of grain. Each item will be slightly different and unique as they are made to order.</p>\
      <p>It\'s the perfect gift for Christmas, Mother\'s Day, Father\'s Day, birthdays, housewarmings, weddings, showers or any occasion.</p> ',
      id: 302,
      price: 49,
      button: '<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">\
               <input type="hidden" name="cmd" value="_s-xclick">\
               <input type="hidden" name="hosted_button_id" value="4P686NV3UMBKY">\
               <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">\
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">\
              </form>'
  }]

this.allProducts = this.pinInfo.concat(this.shavingsetInfo, this.cuttingBoards, this.shavingStands);

})
