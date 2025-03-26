type DataType = {
  title: string,
  id: number
}[]

export default function searchNoteUtils(text: string, data: DataType) {
  text = text.trim().toLowerCase(); // Normalize input

  // Exact match
  const exactMatch = data.filter(element => element.title.toLowerCase() === text);
  
  // Word match
  const slicedText = text.split(/\s+/); // Split on any whitespace
  const slicedQuery = data.map(element => element.title.toLowerCase().split(/\s+/));

  const matchByWord = data.filter((_, index) => 
    slicedText.some(word => slicedQuery[index].includes(word)) // Now checks only within the correct title
  );

  const countMatchByWord = (list = slicedQuery, words = slicedText) => {
    return list.map((element) => element.reduce((count: number, word) => {
      words.forEach((comparison, index) => word === comparison ? count = (count + words.length + 1 - index) : count)
      return count
    }, 0))
  }
  
  // sort by words matched
  const countedMatchByWord = countMatchByWord()

  // final step: drawing to real data intead of the numbers of 
  const addingNumberData = () => {
    return data.map((element, index) => ({
        id: element.id,
        title: element.title,
        match: countedMatchByWord[index]
    }));
  }

  const dataUpdated = addingNumberData();
  const sortedData = dataUpdated.sort((current, coming) => coming.match - current.match).filter((element) => element.match > 0);
  const dataSearched = exactMatch.length > 0 ? exactMatch : sortedData.length > 0 ? sortedData : data;

  // logs
  // console.log("Exact Match:", exactMatch);
  // console.log("Word Match:", matchByWord);
  // console.log("Word Match Counts:", sortedData);

  return dataSearched;
}
