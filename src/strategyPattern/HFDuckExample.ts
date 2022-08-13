//Head first duck example

interface FlyBehaviour {
  fly(): void;
}

interface QuackBehaviour {
  quack(): void;
}

abstract class Duck {
  flyBehaviour: FlyBehaviour;
  quackBehaviour: QuackBehaviour;

  constructor() {}

  abstract display(): void;

  performFly(): void {
    this.flyBehaviour.fly();
  }

  performQuack(): void {
    this.quackBehaviour.quack();
  }
  setQuackBehaviour(qb: QuackBehaviour) {
    this.quackBehaviour = qb;
  }
  setFlyBehaviour(fb: FlyBehaviour) {
    this.flyBehaviour = fb;
  }
  swim() {
    console.log("all ducks can swim");
  }
}

//behaviour algorithm
class FlyWithWings implements FlyBehaviour {
  fly(): void {
    console.log("duck is flying");
  }
}

class FlyWithOutWings implements FlyBehaviour {
  fly(): void {
    console.log("duck can't fly");
  }
}

class Quack implements QuackBehaviour {
  quack(): void {
    console.log("duck is quacking");
  }
}

class Mute implements QuackBehaviour {
  quack(): void {
    console.log("duck can't quack");
  }
}

class Squeak implements QuackBehaviour {
  quack(): void {
    console.log("duck is squeaking");
  }
}
class FlyRocketPowered implements FlyBehaviour {
  fly(): void {
    console.log("duck is flying with rocket");
  }
}

//subclasses
class MallardDuck extends Duck {
  display(): void {
    console.log("display mallard duck");
  }
}
class DuckSimulator {
  constructor() {
    const duck = new MallardDuck();
    duck.setFlyBehaviour(new FlyWithOutWings());
    duck.performFly();
    duck.setFlyBehaviour(new FlyRocketPowered());
    duck.performFly();
  }
}

new DuckSimulator();
