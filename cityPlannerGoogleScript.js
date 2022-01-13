var cityBuilderSheet = SpreadsheetApp.getActive();

var thorpBusinesses = cityBuilderSheet.getSheetValues(4,2,6,1);
var hamletBusinesses = cityBuilderSheet.getSheetValues(11,2,6,1);
var villageBusinesses = cityBuilderSheet.getSheetValues(18,2,8,1);
var smallTownBusinesses = cityBuilderSheet.getSheetValues(27,2,6,1);
var largeTownBusinesses = cityBuilderSheet.getSheetValues(34,2,6,1);
var smallCityBusinesses = cityBuilderSheet.getSheetValues(41,2,8,1);
var largeCityBusinesses = cityBuilderSheet.getSheetValues(50,2,6,1);
var availableTownSizes = cityBuilderSheet.getSheetValues(3,4,8,1);


//Main function to execute everything
function main() {

  //Available Town Sizes
  //Thorp
  //Hamlet
  //Village
  //Small Town
  //Large Town
  //Small City
  //Large City
  //Metropolis  

  //get what the user types in
  var requestedTownSize = cityBuilderSheet.getSheetValues(15,7,1,1).toString().toUpperCase();

  //get the output cell and set its text accordingly
  var outputResults = cityBuilderSheet.getRange("G16").getCell(1,1);
  outputResults.setValue(selectTownSize(requestedTownSize));
}

//-----------------------------------------------------------------------------------//

//call the correct method for the selected town size
function selectTownSize(requestedTownSize) {

  var results = "";

  //switch case for filtering the user's request
  switch (requestedTownSize) {

    case "THORP":

      results = buildThorp(thorpBusinesses).toString();
      break;

    case "HAMLET":

      results = buildHamlet(thorpBusinesses, hamletBusinesses).toString();
      break;

    case "VILLAGE":

      results = buildVillage(thorpBusinesses, hamletBusinesses, villageBusinesses).toString();
      break;

    case "SMALL TOWN":

      results = buildSmallTown(hamletBusinesses, villageBusinesses, smallTownBusinesses).toString();
      results = results + "\n\nAdditionally, select anything else from the Thorp table";
      break;

    case "LARGE TOWN":

      results = buildLargeTown(villageBusinesses, smallTownBusinesses, largeTownBusinesses).toString();
      results = results + "\n\nAdditionally, select anything else from the Thorp and Hamlet tables";
      break;

    case "SMALL CITY":

      results = buildSmallCity(smallTownBusinesses, largeTownBusinesses, smallCityBusinesses).toString();
      results = results + "\n\nAdditionally, select anything else from the Thorp to Village tables";
      break;

    case "LARGE CITY":

      results = buildLargeCity(largeTownBusinesses, smallCityBusinesses, largeCityBusinesses).toString();
      results = results + "\n\nAdditionally, select anything else from the Thorp to Small Town tables";
      break;

    case "METROPOLIS":

      results = buildMetropolis(largeTownBusinesses, smallCityBusinesses, largeCityBusinesses).toString();
      results = results + "\n\nAdditionally, select anything else from the Thorp to Small Town tables";
      break;

    default:

      results = "Not a valid selection";
      break;
  }

  return results;
}

//-----------------------------------------------------------------------------------//

//the following functions build out the lists randomly for each town selection
function buildThorp(tBusinesses) {

  //empty list to store the final results in
  var currentBusinesses = [];

  //grab a random business from the appropriate list and add it to the final list
  for(var i = 0; i <5; i++) {

    currentBusinesses.push("\n" + tBusinesses[getRandom(0,5)]);
  }

  //return the final list
  return currentBusinesses;
}

function buildHamlet(tBusinesses, hBusinesses) {

  var currentBusinesses = [];
  var fullList = [];

  //concatinate the passed lists so that we can more easily pull from the whole selection
  fullList = tBusinesses.concat(hBusinesses);

  for(var i = 0; i <8; i++) {

    currentBusinesses.push("\n" + fullList[getRandom(0,11)]);
  }

  return currentBusinesses;
}

function buildVillage(tBusinesses, hBusinesses, vBusinesses) {
  
  var currentBusinesses = [];
  var fullList = [];

  fullList = tBusinesses.concat(hBusinesses, vBusinesses);

  for(var i = 0; i <12; i++) {

    currentBusinesses.push("\n" + fullList[getRandom(0,19)]);
  }

  return currentBusinesses;
}

function buildSmallTown(hBusinesses, vBusinesses, stBusinesses) {

  var currentBusinesses = [];
  var fullList = [];

  fullList = hBusinesses.concat(vBusinesses, stBusinesses);

  for(var i = 0; i <12; i++) {

    currentBusinesses.push("\n" + fullList[getRandom(0,19)]);
  }

  return currentBusinesses;
}

function buildLargeTown(vBusinesses, stBusinesses, ltBusinesses) {

  var currentBusinesses = [];
  var fullList = [];

  fullList = vBusinesses.concat(stBusinesses, ltBusinesses);

  for(var i = 0; i <12; i++) {

    currentBusinesses.push("\n" + fullList[getRandom(0,19)]);
  }

  return currentBusinesses;
}

function buildSmallCity(stBusinesses, ltBusinesses, scBusinesses) {
  
  var currentBusinesses = [];
  var fullList = [];

  fullList = stBusinesses.concat(ltBusinesses, scBusinesses);

  for(var i = 0; i <12; i++) {

    currentBusinesses.push("\n" + fullList[getRandom(0,19)]);
  }

  return currentBusinesses;
}

function buildLargeCity(ltBusinesses, scBusinesses, lcBusinesses) {

  var currentBusinesses = [];
  var fullList = [];

  fullList = ltBusinesses.concat(scBusinesses, lcBusinesses);

  for(var i = 0; i <12; i++) {

    currentBusinesses.push("\n" + fullList[getRandom(0,19)]);
  }

  return currentBusinesses;
}

function buildMetropolis(ltBusinesses, scBusinesses, lcBusinesses) {

  var currentBusinesses = [];
  var fullList = [];

  fullList = ltBusinesses.concat(scBusinesses, lcBusinesses);

  for(var i = 0; i <16; i++) {

    currentBusinesses.push("\n" + fullList[getRandom(0,19)]);
  }

  return currentBusinesses;
}

//-----------------------------------------------------------------------------------//

//random number function. Get random number between a min and max inclusively
function getRandom(min, max) {

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
