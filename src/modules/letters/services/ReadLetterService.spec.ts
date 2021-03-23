import FakeLettersRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ReadLetterService from './ReadLetterService';

describe('UpdateReadLetter', () => {
  it('should be able update the read letter', async () => {
    const fakeLettersRepository = new FakeLettersRepository();
    const updateLetter = new ReadLetterService(fakeLettersRepository);

    const letter = await fakeLettersRepository.create({
      name: 'Fulano',
      message: 'CartaParaPapaiNoel'
    });

    const readLetter = await updateLetter.execute(letter.id);

    expect(readLetter?.read).toBe(true);

  });
});