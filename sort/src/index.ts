class Sorter {
  constructor(public collection: number[]){
    this.collection = collection
  }

  // bubble sort
  sort(): void {
    const {length} = this.collection;
    for(let i=0; i < length; i++){
      for(let j=0; j < length - i - 1; j++){
        if(this.collection[j] > this.collection[j+1]){
          const leftHand = this.collection[j]
          this.collection[j] = this.collection[j+1]
          this.collection[j+1] = leftHand
        }
      }
    }
  }
}

const sorter = new Sorter([3,-5, 10, 1, 2])
sorter.sort()
console.log(sorter.collection);
