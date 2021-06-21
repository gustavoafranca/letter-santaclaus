import Letter from "../models/Letter";


export default {
  render(letter: Letter){
    return {
      id: letter.id,
      name: letter.name,
      age: letter.age,
      city: letter.city,
      uf: letter.uf,
      behavior: letter.behavior,
      do: letter.do,
      gift: letter.gift,
      date: letter.createAT
    }
  },

  renderMany(letter: Letter[]){
    return letter.map(letter => this.render(letter))
  }
}