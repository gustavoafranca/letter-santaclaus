import User from "../models/User"


export default {
  render(user: User){
    return {
      id: user.id,
      username: user.username,
      date: user.createAT
    }
  },

  renderMany(user: User[]){
    return user.map(user => this.render(user))
  }
}