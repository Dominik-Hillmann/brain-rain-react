import renderer from 'react-test-renderer'
import Navbar from './Navbar.js';
describe('test', () => {
    it('works', () => {
        const tree = renderer.create(<Navbar />).toJSON();
        console.log(tree);
        expect(tree).toMatchSnapshot();
    });
});