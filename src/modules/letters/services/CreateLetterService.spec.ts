import FakeLettersRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateLetterService from './CreateLetterService';

describe('CreateLetter', () => {
  it('should be able to create a new letter', async () => {
    const fakeLettersRepository = new FakeLettersRepository();
    const createLetter = new CreateLetterService(fakeLettersRepository);

    const letter = await createLetter.execute({
      name: 'Fulano',
      message: 'CartaParaPapaiNoel'
    });

    expect(letter).toHaveProperty('id');
    expect(letter.name).toBe('Fulano');
  });

  it('must not be able to create two cards in the same user', async () => {
    const fakeLettersRepository = new FakeLettersRepository();
    const createLetter = new CreateLetterService(fakeLettersRepository);

    await createLetter.execute({
      name: 'Fulano',
      message: 'CartaParaPapaiNoel'
    });

    await expect(
      createLetter.execute({
        name: 'Fulano',
        message: 'CartaParaPapaiNoel'
      })
    ).rejects.toBeInstanceOf(Error);
  })
});