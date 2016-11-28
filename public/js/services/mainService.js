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
        desc: 'Handmade from walnut wood, this heavy duty set comes with your choice of razor (Double-edged Safety Razor, Gillette Fusion or Mach 3), a pure badger hair shaving brush and a stand. All items have chrome accents and are finished with super glue for an extremely solid finish. They are polished to a high gloss for a durable, lasting look that you will be able to enjoy for years to come.',
        id: 101,
        price: 129

    }, {
      name: 'Marblewood Shaving Set',
      image: "../public/images/marblewood.jpg",
      desc: 'Handmade from marblewood, this heavy duty set comes with your choice of razor (Double-edged Safety Razor, Gillette Fusion or Mach 3), a pure badger hair shaving brush and a stand. All items have chrome accents and are finished with super glue for an extremely solid finish. They are polished to a high gloss for a durable, lasting look that you will be able to enjoy for years to come.',
      id: 102,
      price: 129
    },{
      name: 'Birdseye Maple Shaving Set',
      image: "../public/images/birdseye.jpg",
      desc: 'Handmade from birdseye maple wood, this heavy duty set comes with your choice of razor (Double-edged Safety Razor, Gillette Fusion or Mach 3), a pure badger hair shaving brush and a stand. All items have chrome accents and are finished with super glue for an extremely solid finish. They are polished to a high gloss for a durable, lasting look that you will be able to enjoy for years to come.',
      id: 103,
      price: 129
    },{
      name: 'Caribbean Swirl Shaving Set',
      image: "../public/images/blue.jpg",
      desc: 'Handmade from Caribbean Swirl acrylic, this heavy duty set comes with your choice of razor (Double-edged Safety Razor, Gillette Fusion or Mach 3), a pure badger hair shaving brush and a stand. All items have chrome accents and are polished to a high gloss for a durable, lasting look that you will be able to enjoy for years to come.',
      id: 104,
      price: 129
      },{
        name: 'Spalted Tamarind Shaving Set',
        image: "../public/images/spalted.jpg",
        desc: 'Handmade from spalted tamarind wood, this heavy duty set comes with your choice of razor (Double-edged Safety Razor, Gillette Fusion or Mach 3), a pure badger hair shaving brush and a stand. All items have chrome accents and are finished with super glue for an extremely solid finish. They are polished to a high gloss for a durable, lasting look that you will be able to enjoy for years to come.',
        id: 105,
        price: 129
      },{
        name: 'Cherry Shaving Set',
        image: "../public/images/cherry.jpg",
        desc: 'Handmade from cherry wood, this heavy duty set comes with your choice of razor (Double-edged Safety Razor, Gillette Fusion or Mach 3), a pure badger hair shaving brush and a stand. All items have chrome accents and are finished with super glue for an extremely solid finish. They are polished to a high gloss for a durable, lasting look that you will be able to enjoy for years to come.',
        id: 106,
        price: 129

    }]

this.allProducts = this.pinInfo.concat(this.shavingsetInfo);

})
