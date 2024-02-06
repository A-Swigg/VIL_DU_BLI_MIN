    const compliments = ["Søte", "Fine", "Vakre", "Flinke", "Flotte", "Sexy", "Heite", "Beste", "Lekre", "Attraktive", "Pene", "Snille", "Sjarmerende", "Glamorøse", "Nydelige", "Nusselige", "Perfekte"];

    document.getElementById('complimentButton').addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * compliments.length);
        const randomCompliment = compliments[randomIndex];
        document.getElementById('complimentDisplay').innerText = randomCompliment;
    });