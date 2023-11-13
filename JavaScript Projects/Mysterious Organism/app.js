// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }

  const pAequorFactory = (specimenNum, dna) => {
    return {
        specimenNum,
        dna,
    mutate() {
      const randBase = Math.floor(Math.random() * this.dna.length);
      let mutateBase = returnRandBase();
        while (this.dna(randBase === mutateBase)) {
          mutateBase = returnRandBase();
        }
        this.dna[randBase] = mutateBase;
        return this.dna;
    },
    compareDNA(otherSpecimen) {
      let commonCount = 0 
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherSpecimen.dna[i]) {
          commonCount++;
        }
      }
      let commonPercent = (commonCount / this.dna.length) * 100;
      console.log(`Specimen: ${this.specimenNum} and specimen: ${otherSpecimen.specimenNum} have ${commonPercent}% DNA in common.`);
    },
    willLikelySurvive() {
      let survivalCount = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          survivalCount++;
        }
      }
      let survivalPercent = (survivalCount / this.dna.length) * 100;
      if (survivalPercent >= 60) {
        return true;
      } else {
        return false;
      }
    },
    };
  };
  
  const survivingThirty = () => {
    const survivingSpecimens = [];
    let specimenCount = 1;

    while (survivingSpecimens < 30) {
      let newSpecimen = pAequorFactory(specimenCount, mockUpStrand());
    if (newSpecimen.willLikelySurvive()) {
      survivingSpecimens.push(newSpecimen);
    }
      specimenCount++;
    }
      return survivingSpecimens;
  };
  
console.log(survivingThirty());
console.log(survivingSpecimens);





