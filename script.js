const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

async function calculateAge() {
    const birthdayValue = birthdayEl.value;

    if (birthdayValue === "") {
        alert("Masukkan tanggal lahir dulu");
        return;
    }

    try {
        const response = await fetch("/api/hitung-umur", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ birthday: birthdayValue })
        });

        const data = await response.json();

        resultEl.innerText = `Umur kamu ${data.age} tahun`;
    } catch (error) {
        resultEl.innerText = "Gagal konek ke server";
    }
}

btnEl.addEventListener("click", calculateAge);