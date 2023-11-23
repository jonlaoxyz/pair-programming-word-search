
    const wordSearch = (letters, word) => { 
      const horizontalJoin = letters.map(ls => ls.join(''))
      for (l of horizontalJoin) {
          if (l.includes(word)) return true
      }
      // transpose matrix
      let rowStr = []; 
      for (let c =  0; c < letters[0].length; c++)
      {
          let vertWord = "";
          for(let r = 0; r < letters.length; r++)
          {
              vertWord += letters[r][c];
          }
          rowStr.push(vertWord);
      }
      // look for the word
      for(const value of rowStr)
      {
          if(value.includes(word))
          {
              return true;
          }
      }
      return false;
  }


module.exports = wordSearch