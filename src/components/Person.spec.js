import React from 'react';
import {shallow} from 'enzyme';
import Person from './Person';

function initial(value =  { isNameModalOpen: false,isAddressModalOpen: false,isTeamsModalOpen: false, name: 'John Smith', address: '123 Bowl Lane NewYork, NY 10021', favoriteTeams:[]  }) {
    const actions = {
        openNameModal: jest.fn(),
        openAddressModal: jest.fn(),
        openTeamsModal: jest.fn()
    }
    const component = shallow(
        <Person value={value} {...actions} />
    )

    return {
        component: component,
        actions: actions,
        buttons: component.find('button'),
        span: component.find('span')
    }
}

describe('person component', () => {
    it('should display name', () => {
        const { span } = setup()
        expect(span[0].text()).toMatch(/^John Smith/)
    })
    it('should display address', () => {
        const { span } = setup()
        expect(span[1].text()).toMatch(/^123 Bowl Lane NewYork, NY 10021/)
    })

})