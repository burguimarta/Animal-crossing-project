const getApiData = () => {
    return fetch("https://acnhapi.com/v1/villagers/")
      .then((response) => response.json())
      .then((data) => {
        const completeData = data.map((data, index) => {
          return {
            id: index,
            character: data.name,
            personality: data.personality,
            birthday_string: data.birthday_string,
            birthday: data.birthday,
            species: data.species,
            gender: data.gender,
            catch_phrase: data.catch_phrase,
            icon_uri: "https://acnhapi.com/v1/icons/villagers/1",
            image_uri: "https://acnhapi.com/v1/images/villagers/1"
          };
        });
  
        return completeData;
      });
  };
  
  export default getApiData;
  