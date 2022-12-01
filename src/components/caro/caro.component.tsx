import { Component } from "react";
import RegisterDialog from "../register/register.component";
import CaroTemplate from "./caro.template";

export interface ICaroState {
  isRegisting: boolean;
  username: string;
  step: number;
}

class CaroComponent extends Component<any, ICaroState> {
  state: ICaroState = {
    isRegisting: false,
    username: '',
    step: 10
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isRegisting: true })
    }, 1000)
  }

  render() {
    return <>
      <CaroTemplate {...this.state} />
      <RegisterDialog isOpen={this.state.isRegisting} onClose={this.onCloseRegisterDialog} onSubmit={this.onSubmitRegister} />
    </>
  }

  onCloseRegisterDialog = () => {
    setTimeout(() => {
      this.setState({ isRegisting: false })
    }, 300)
  }

  onSubmitRegister = (username: string) => {
    this.setState({ username })
    this.onCloseRegisterDialog()
  }
}

export default CaroComponent;
