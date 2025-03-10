 const uploadBtn = document.getElementById('upload-btn');
        const fileInput = document.getElementById('file-input');
        const imageContainer = document.getElementById('image-container');

        // Button click pe file input ko trigger karna
        uploadBtn.addEventListener('click', () => {
            fileInput.click();
        });

        // File select hone par image ko div me display karna
        fileInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    // Image ko div ke andar set karna
                    imageContainer.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image">`;
                };
                reader.readAsDataURL(file);
            }
        });