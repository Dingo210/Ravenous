const apiKey = 'KVKrNYRuBR5Vyj9VMjlG6Dqsoda0p7rLXVK6IEAvYa8ln_-TtcygCkf_IOmeOL6DaCx-uRYY1cz3Q5nxwSWs9gMvvRwohxY1mE2hgbMkztqj1fpGSmDw2IK2PYJJW3Yx';
const Yelp = {
  search(term, location, sortBy)
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}` {
    headers: {
      { Authorization: `Bearer ${apiKey}`
    }
  }).then(response => {
    return response.json();
  }).then(jsonResponse => {
    if (jsonResponse.businesses.map) {
      return jsonResponse.businesses.map(businesses => {
        id: business.id,
        imageSrc: business.image_url,
        name: business.name,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zipCode: business.location.zip_code,
        category: business.categories[0].title,
        rating: business.rating,
        reviewCount: business.review_count
      }));
    }
  });
}
};
export default Yelp;
