import FakeLettersRepository from '../repositories/fakes/FakeAppointmentsRepository';
import UpdateLetterService from './UpdateLetterService';

describe('UpdateLetter', () => {
  it('should be able update the letter', async () => {
    const fakeLettersRepository = new FakeLettersRepository();
    const updateLetter = new UpdateLetterService(fakeLettersRepository);

    const letter = await fakeLettersRepository.create({
      name: 'Fulano',
      message: 'CartaParaPapaiNoel'
    });

    const update = await updateLetter.execute({
      id: letter.id,
      name: 'Sicrano',
      message: 'OutraCartaParaPapaiNoel'
    });

    expect(update.name).toBe('Sicrano');
    expect(update.message).toBe('OutraCartaParaPapaiNoel');
  });

  it('not should be able update the letter from user not existing', async () => {
    const fakeLettersRepository = new FakeLettersRepository();
    const updateLetter = new UpdateLetterService(fakeLettersRepository);

    var mongoose = require('mongoose');
    var objectId = mongoose.Types.ObjectId('6059ed7f2829f52e90b5019e');

    await fakeLettersRepository.create({
      name: 'Fulano',
      message: 'CartaParaPapaiNoel'
    });

    await expect(
      updateLetter.execute({
        id: objectId,
        name: 'Sicrano',
        message: 'OutraCartaParaPapaiNoel'
      })
    ).rejects.toBeInstanceOf(Error);
  });
});