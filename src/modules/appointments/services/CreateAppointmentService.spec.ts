import FakeAppointmentRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentRepository = new FakeAppointmentRepository();
    const createAppointmentService = new CreateAppointmentService(
      fakeAppointmentRepository,
    );

    const appointment = await createAppointmentService.execute({
      date: new Date(),
      provider_id: '123456645412',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123456645412');
  });

  //   it('should not be able to create two appointments on the same time', () => {
  //     expect(1 + 2).toBe(3);
  //   });
});
