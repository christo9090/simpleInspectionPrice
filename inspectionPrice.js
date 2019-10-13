
const returnPrice = () => {
  let inspectionPrice = 0
  let $sqft = $('#HomeSquareFootage')[0].value;
  let $condo = $('#condoCheck')
  let $newConst = $('#newConst')
  let discountPrice = 0;

  // Find base inspection price.
  if ($sqft <= 1000 && $sqft > 1) {
    inspectionPrice = 340
  } else if ($sqft > 1000 && $sqft <=1500) {
    inspectionPrice = 355
  } else if ($sqft > 1500 && $sqft <=2000) {
    inspectionPrice = 365
  } else if ($sqft > 2000 && $sqft <=2500) {
    inspectionPrice = 390
  } else if ($sqft > 2500 && $sqft <=3000) {
    inspectionPrice = 410
  } else if ($sqft > 3000 && $sqft <=3500) {
    inspectionPrice = 430
  } else if ($sqft > 3500 && $sqft <=4000) {
    inspectionPrice = 460
  } else if ($sqft > 4000 && $sqft <=4500) {
    inspectionPrice = 480
  } else if ($sqft > 4500 && $sqft <=5000) {
    inspectionPrice = 510
  } else if ($sqft > 5000 && $sqft <=6000) {
    inspectionPrice = 550
  } else if ($sqft > 6000 && $sqft <=7000) {
    inspectionPrice = 600
  } else if ($sqft > 7000 && $sqft <=8000) {
    inspectionPrice = 650
  } else if ($sqft > 8000 && $sqft <=9000) {
    inspectionPrice = 700
  } else if ($sqft > 9000) {
    inspectionPrice = 750
  } else {
    alert('Please enter a number.')
    return false;
  };

  // Find discount
  if ($condo[0].checked === true && $newConst[0].checked === true) {
    discountPrice = 25;
  } else if ($condo[0].checked) {
    discountPrice = 25;
  } else if ($newConst[0].checked) {
    discountPrice = 15;
  };
  //find total
  let finalPrice = inspectionPrice - discountPrice
  // console.log(finalPrice)

  //Print the total to the DOM.
  $('#pricingReturn').html(`<p><strong>The base price for your inspection is:</strong></p><h2 class="bigPrice">$${finalPrice}<h2>`)
};

$(document).ready(() => {
  $('#submitButtonSQFT').on("click", () => {
    // returnPrice()
    if (returnPrice() !== false) {
    $('.inspectionPricingInput').hide();
    $('#resetPriceCalc').show();
    $('#pricingReturn').fadeIn(500);
    $('.shape-bg').addClass('shape-move');
    $('.shape-bg2').addClass('shape-move2');
    }
  });
  $('#HomeSquareFootage').on('focus', () => {
    $('#measureUnit').fadeIn(400);

  });
  $('.priceCheckbox').on('click', (event) => {
    $(event.currentTarget).parent().toggleClass('orangeBackground')
    $(event.currentTarget).toggleClass('orangeBackground')
  });
  $('#resetPriceCalc').on('click', () => {

    $('.inspectionPricingInput').show();
    $('#resetPriceCalc').hide();
    $('#pricingReturn').html('');
    $('#pricingReturn').hide();
    $('.shape-bg').removeClass('shape-move');
    $('.shape-bg2').removeClass('shape-move2');
  });
}); //end of jquery
