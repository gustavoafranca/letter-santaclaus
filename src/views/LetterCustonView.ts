import Letter from "../models/Letter";


export default {
  render(letter: Letter){
    return {
      id: letter.id,
      nome: letter.name,
      idade: letter.age,
      cidade: letter.city,
      uf: letter.uf,
      comportamento: letter.behavior,
      resumo_do_ano: letter.do,
      presente: letter.gift,
      data: letter.createAT,
      mensagem: `Meu nome é ${letter.name} tenho ${letter.age} anos e moro em ${letter.city}/${letter.uf}.
      Estou tão animado pois está quase na hora da sua vinda!
      Este ano eu tenho sido ${letter.behavior}.
      Quero contar algumas das coisas realmente boas que fiz este ano: ${letter.do}.
      Por isso, neste Natal gostaria muito de ganhar ${letter.gift}
      `
    }
  },

  renderMany(letter: Letter[]){
    return letter.map(letter => this.render(letter))
  }
}