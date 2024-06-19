const countryName = document.querySelector("#countryNames_");
const selectedCountry = document.querySelector(".country_");

countryName.addEventListener("change", (e) => {
  fetchWeather(e.target.value);
});
const fetchCountry = async () => {
  const apiResponse = await fetch(
    "https://countriesnow.space/api/v0.1/countries"
  );
  const ParsedData = await apiResponse.json();
  const result = ParsedData.data;
  result.forEach((i) => {
    const countryOption = document.createElement("option");
    countryOption.innerHTML = i.country;
    const countryValue = i.value;
    countryName.appendChild(countryOption);
  });
};
fetchCountry();

const fetchWeather = async (country) => {
  const req = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=29d3472cf0ba4a0e83782327241906&q=${country}&aqi=no`
  );
  const res = await req.json();
  const result = res.location.country;
  if (result == "Afghanistan" || result == "Pakistan" || result == "Saudi Arabia" || result == "United States" ) {
    selectedCountry.innerHTML = `
    <img src="https://imgs.search.brave.com/UqnY_ku4jqQOFihP9bmCcu_ACh8Q4twFuHY_RP7anBY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzU2/ZDM0N2Q2M2M0NGQ4/MDFmNDc3Yzc3Yy8x/NDgzMzI2NTEyMTkz/LTZMVEVXQVNWVk9O/RkYyVlNQWlEzLzkx/MV9TdGlsbHNfRHVu/a2VkMDEuanBn" alt="Allahu Akhbar" class="d-flex justify-content-center mt-3" width="100%" height="300px"/>
    `;
  } else {
    selectedCountry.innerHTML = "A Peace Country"
  }
};

fetchWeather();
