document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const userName = document.getElementById('userName').value;
    const vehicleType = document.getElementById('vehicleType').value;
    alert(`User Details:\nName: ${userName}\nVehicle Type: ${vehicleType}`);
  });
  
  document.getElementById('startCharging').addEventListener('click', function () {
    const chargingStatus = document.getElementById('chargingStatus');
    const chargingStationImages = document.getElementById('chargingStationImages');
  
    // Simulating a loading state by hiding images during charging
    chargingStationImages.style.display = 'none';
    chargingStatus.textContent = 'Charging in progress...';
  
    // Simulating a 5-second charging process
    setTimeout(() => {
      chargingStatus.textContent = 'Charging complete';
      chargingStationImages.style.display = 'flex'; // Show images after charging
    }, 5000);
  });
  