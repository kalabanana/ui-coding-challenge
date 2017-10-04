import person from './index'

describe('reducers', () => {
    describe('person', () => {
        it('initial state', () => {
            expect(person(undefined, {})).toBe({ isNameModalOpen: false, isAddressModalOpen: false, isTeamsModalOpen: false, name: 'John Smith', address: '123 Bowl Lane NewYork, NY 10021', favoriteTeams:[] })
        })

        it('handle OPEN_NAME action', () => {
            expect(person({ isNameModalOpen: false, isAddressModalOpen: false, isTeamsModalOpen: false }, { type: 'OPEN_NAME', payload: true })).toBe({ isNameModalOpen: true, isAddressModalOpen: false, isTeamsModalOpen: false})
        })

        it('handle OPEN_ADDRESS action', () => {
            expect(person({ isNameModalOpen: false, isAddressModalOpen: false, isTeamsModalOpen: false}, { type: 'OPEN_ADDRESS', payload: true })).toBe({ isNameModalOpen: false, isAddressModalOpen: true, isTeamsModalOpen: false})
        })

        it('handle CHANGE_NAME action', () => {
            expect(person({ isNameModalOpen: false, isAddressModalOpen: false, isTeamsModalOpen: false}, { type: 'CHANGE_NAME', payload: Mei })).toBe({ isNameModalOpen: true, isAddressModalOpen: false, isTeamsModalOpen: false, name: 'Mei'})
        })
        it('handle CHANGE_ADDRESS action', () => {
            expect(person({ isNameModalOpen: false, isAddressModalOpen: false, isTeamsModalOpen: false}, { type: 'CHANGE_ADDRESS', payload: newaddress })).toBe({ isNameModalOpen: false, isAddressModalOpen: true, isTeamsModalOpen: false, address: 'newaddress'})
        })
        it('handle UPDATE_TEAMS action', () => {
            expect(person({ isNameModalOpen: false, isAddressModalOpen: false, isTeamsModalOpen: false}, { type: 'UPDATE_TEAMS', payload: team1 })).toBe({ isNameModalOpen: false, isCollegeModalOpen: false, isDepartmentModalOpen: true, favoriteTeams: 'team1' })
        })
    })
})
