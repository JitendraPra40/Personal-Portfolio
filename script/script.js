    document.getElementById("imglink1").addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default link behavior

      if (confirm("Do you want to download the image?")) {
        var imageUrl = this.getAttribute("href");
        var imageFileName = "imageUrl".substring(imageUrl.lastIndexOf('/') + 1); // Extract the file name

        var anchor = document.createElement("a");
        anchor.href = imageUrl;
        anchor.download = imageFileName;

        // Trigger the download programmatically
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
      }
    });
  

    document.getElementById("imglink2").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
  
        if (confirm("Do you want to download the image?")) {
          var imageUrl = this.getAttribute("href");
          var imageFileName = "imageUrl".substring(imageUrl.lastIndexOf('/') + 1); // Extract the file name
  
          var anchor = document.createElement("a");
          anchor.href = imageUrl;
          anchor.download = imageFileName;
  
          // Trigger the download programmatically
          document.body.appendChild(anchor);
          anchor.click();
          document.body.removeChild(anchor);
        }
      });

      document.getElementById("imglink3").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
  
        if (confirm("Do you want to download the image?")) {
          var imageUrl = this.getAttribute("href");
          var imageFileName = "imageUrl".substring(imageUrl.lastIndexOf('/') + 1); // Extract the file name
  
          var anchor = document.createElement("a");
          anchor.href = imageUrl;
          anchor.download = imageFileName;
  
          // Trigger the download programmatically
          document.body.appendChild(anchor);
          anchor.click();
          document.body.removeChild(anchor);
        }
      });

      document.getElementById("imglink4").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
  
        if (confirm("Do you want to download the image?")) {
          var imageUrl = this.getAttribute("href");
          var imageFileName = "imageUrl".substring(imageUrl.lastIndexOf('/') + 1); // Extract the file name
  
          var anchor = document.createElement("a");
          anchor.href = imageUrl;
          anchor.download = imageFileName;
  
          // Trigger the download programmatically
          document.body.appendChild(anchor);
          anchor.click();
          document.body.removeChild(anchor);
        }
      });

      document.getElementById("imglink5").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
  
        if (confirm("Do you want to download the image?")) {
          var imageUrl = this.getAttribute("href");
          var imageFileName = "imageUrl".substring(imageUrl.lastIndexOf('/') + 1); // Extract the file name
  
          var anchor = document.createElement("a");
          anchor.href = imageUrl;
          anchor.download = imageFileName;
  
          // Trigger the download programmatically
          document.body.appendChild(anchor);
          anchor.click();
          document.body.removeChild(anchor);
        }
      });

      document.getElementById("imglink6").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
  
        if (confirm("Do you want to download the image?")) {
          var imageUrl = this.getAttribute("href");
          var imageFileName = "imageUrl".substring(imageUrl.lastIndexOf('/') + 1); // Extract the file name
  
          var anchor = document.createElement("a");
          anchor.href = imageUrl;
          anchor.download = imageFileName;
  
          // Trigger the download programmatically
          document.body.appendChild(anchor);
          anchor.click();
          document.body.removeChild(anchor);
        }
      });

      