export class container{
    Names: Array<Object>;
    Status: string;
    Ports: Array<Ports>;
    Image: string;
    State: string;
}

class Ports{
    PrivatePort: string
}