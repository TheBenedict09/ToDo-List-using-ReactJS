document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    
    var nameInput = document.getElementById('name');
    var messageDiv = document.getElementById('message');
    
    messageDiv.innerHTML = 'Submitted Name: ' + nameInput.value;
  
    document.querySelector('button[type="submit"]').style.display = 'none';
    document.getElementById('editButton').style.display = 'inline-block';
  });
  
  document.getElementById('editButton').addEventListener('click', function() {
    var nameInput = document.getElementById('name');
    var messageDiv = document.getElementById('message');
    
    nameInput.removeAttribute('readonly');
    
    messageDiv.innerHTML = '';
  
    document.querySelector('button[type="submit"]').style.display = 'inline-block';
    document.getElementById('editButton').style.display = 'none';
  });
  