interface PayMethodBehaviour {
  pay(): void;
}

abstract class PaymentSystem {
  paymethodBehaviour: PayMethodBehaviour;
  performPayment(): void {
    this.paymethodBehaviour.pay();
  }

  setpaymentBehaviour(pb: PayMethodBehaviour): void {
    this.paymethodBehaviour = pb;
  }
}

//payment algorithm
class PayWithBitcoin implements PayMethodBehaviour {
  pay(): void {
    console.log("paying with bitcoin");
  }
}

class PayWithCreditCard implements PayMethodBehaviour {
  pay(): void {
    console.log("paying with credit card");
  }
}

class PayWithDirectTransfer implements PayMethodBehaviour {
  pay(): void {
    console.log("paying with direct transfer");
  }
}

//different payment system utilizers
class Amazon extends PaymentSystem {
  appName: string = "amazon";
}

class AWS extends PaymentSystem {
  appName: string = "amazon web services";
}

class AmazonKindle extends PaymentSystem {
  appName: string = "amazon kindle";
}

class PaymentSimulator {
  constructor() {
    const awsPayment = new AWS();
    awsPayment.setpaymentBehaviour(new PayWithCreditCard());
    awsPayment.performPayment();
  }
}

new PaymentSimulator();
