import { Chance } from "chance";


const chance = Chance()
const FakeUserData = () => {
    return (
        chance.name({ middle: true })
    );
};

export default FakeUserData;