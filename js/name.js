document.addEventListener("DOMContentLoaded",
    function(e){
        let revise = document.querySelector("#revise");
        revise.addEventListener("click",
            function(e){
                let show = document.querySelector("#show");
                show.style.display = "block";
                revise.style.display = "none";
            }
        )
        let check = document.querySelector("#check");
        check.addEventListener("click",
            function(e){
                let name = document.querySelector("#name").value;
                let read = document.querySelector("#read");
                read.textContent = name;
                show.style.display = "none";
                revise.style.display = "inline";
            }
        )
    }
)
