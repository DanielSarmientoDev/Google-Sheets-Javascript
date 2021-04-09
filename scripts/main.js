  function successFunc(data) {
      console.log(data);
    }
    // Get all rows where column 'score' is '42'
    var searchQuery = {
      score: 42,
    };
    Sheetsu.read("https://sheetsu.com/apis/v1.0su/65665c02c848",{}, successFunc);