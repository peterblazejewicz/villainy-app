const VillainsPage = require('./pages/villains');

describe('The Villains App', () => {
  describe('The `EditVillains` page', () => {
    let page;

    beforeEach(() => {
      page = new VillainsPage();
      page.get();
    });

    describe('All villains', () => {
      it('should show a list of all villains', () => {
        expect(page.villains.count()).toBe(4);
      });

      it('should allow liking/unliking a villain', () => {
        expect(page.isFavourite('Poison Ivy')).toBe(false);

        page.toggleIsFavourite('Poison Ivy');
        expect(page.isFavourite('Poison Ivy')).toBe(true);

        page.toggleIsFavourite('Poison Ivy');
        expect(page.isFavourite('Poison Ivy')).toBe(false);
      });

      describe("Editing a villain's name", () => {
        it('should save the name on <BLUR>', () => {
          expect(page.isFavourite('Doctor Octopus')).toBe(true);
          expect(page.isFavourite('Megatron')).toBe(false);

          page.editVillainName(
            'Doctor Octopus',
            'Megatron',
            VillainsPage.PostEditAction.BLUR,
          );

          expect(page.isFavourite('Doctor Octopus')).toBe(false);
          expect(page.isFavourite('Megatron')).toBe(true);
        });

        it('should save the name on <ENTER>', () => {
          expect(page.isFavourite('Doctor Octopus')).toBe(true);
          expect(page.isFavourite('Megatron')).toBe(false);

          page.editVillainName(
            'Doctor Octopus',
            'Megatron',
            VillainsPage.PostEditAction.ENTER,
          );

          expect(page.isFavourite('Doctor Octopus')).toBe(false);
          expect(page.isFavourite('Megatron')).toBe(true);
        });

        it('should restore the name on <ESCAPE>', () => {
          expect(page.isFavourite('Doctor Octopus')).toBe(true);
          expect(page.isFavourite('Megatron')).toBe(false);

          page.editVillainName(
            'Doctor Octopus',
            'Megatron',
            VillainsPage.PostEditAction.ESCAPE,
          );

          expect(page.isFavourite('Doctor Octopus')).toBe(true);
          expect(page.isFavourite('Megatron')).toBe(false);
        });
      });
    });

    describe('My favourite villains', () => {
      it('should show a list of my favourite villains', () => {
        expect(page.favouriteVillains.count()).toBe(2);
      });
    });
  });
});
