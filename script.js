//Displaying IP Address
let top_text = document.getElementById('my_top_text');
let ip_address = "";
$.getJSON("https://api.ipify.org?format=json", function(data){
        ip_address = ip_address + "MY Public IP Address: " + data.ip;
        top_text.innerHTML = ip_address;
    }
);

//Displaying IP Address in another field also
let get_data = document.getElementById('get_data_btn');
let flag = false;

get_data.addEventListener("click", ()=>{
    if(flag == false){
        document.getElementById('fetched_data').style.display = 'block';
        document.getElementById('fetched_data_ip').innerText = ip_address;
        flag = true;
    }
    else{
        document.getElementById('fetched_data').style.display = 'none';
        flag = false;
    }
});


//Displaying geolocation information and location on google map
let time_zone = document.getElementById('timezone');
let latitude = document.getElementById('lat');
let longitude = document.getElementById('long');
let date_time = document.getElementById('date_and_time');
let my_map = document.getElementById('my_map');
let date_obj = new Date();
let month = date_obj.getMonth() + 1;
let pincode = "";

$.getJSON(`https://geo.ipify.org/api/v2/country,city?apiKey=at_MM01PeyCDmpd9WHYHNcV3PBpQ4TfV&ipAddress=${ip_address}`, function(data){
    latitude.innerHTML = "Lat: " + data.location.lat;
    document.getElementById('city').innerHTML = "City: " + data.location.city;
    longitude.innerHTML = "Long: " + data.location.lng;
    my_map.setAttribute("src", `https://maps.google.com/maps?q=${data.location.lat},${data.location.lng}&output=embed`);
    document.getElementById('region').innerHTML = "Region: " + data.location.region;
    time_zone.innerHTML = "Timezone: " + "GMT" + data.location.timezone;
    console.log(data);
    date_time.innerHTML = "Date and Time: " + month + '/' + date_obj.getDate() + '/' + date_obj.getFullYear() + ' - ' + date_obj.getHours() + ':' + date_obj.getMinutes();
    pincode += data.location.postalCode;
}, 'json');

//displaying area pincode
// $.getJSON(`https://api.postalpincode.in/pincode/250001`, function(data){
//     console.log(data);
//     number_of_pincodes = data.length;
//     document.getElementById('message').innerHTML = "Message: " + data[0].PostOffice.length;
// }, 'json');







