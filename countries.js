const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Argentina',
    'Australia',
    'Austria',
    'Belgium',
    'Brazil',
    'Bulgaria',
    'Canada',
    'Chile',
    'China',
    'Colombia',
    'Croatia',
    'Denmark',
    'Egypt',
    'Finland',
    'France',
    'Germany',
    'Greece',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Japan',
    'Kenya',
    'Korea',
    'Malaysia',
    'Mexico',
    'Netherlands',
    'New Zealand',
    'Norway',
    'Pakistan',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Romania',
    'Russia',
    'Saudi Arabia',
    'Singapore',
    'South Africa',
    'Spain',
    'Sweden',
    'Switzerland',
    'Thailand',
    'Turkey',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Vietnam',
];

export function populateCountries() {
    const countrySelect = document.querySelector('#country');

    // Clear existing options and add default
    countrySelect.innerHTML = '<option value="">Select a country</option>';

    countries.forEach((country) => {
        const opt = document.createElement('option');
        opt.value = country;
        opt.textContent = country;
        countrySelect.appendChild(opt);
    });
}
