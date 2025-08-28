import { startOfHour } from 'date-fns';
import Appointment from '../infra/typeorm/entities/Appointment';
import AppointmentsRepository from '../infra/typeorm/repositories/AppointmentsRepository';
import AppError from '@shared/errors/AppError';

interface Request {
  provider_id: string;
  date: Date;
}

class CreateAppointmentService {
  public async execute({ date, provider_id }: Request): Promise<Appointment> {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate =
      await AppointmentsRepository.findByDate(appointmentDate);

    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already booked');
    }
    const appointment = AppointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    await AppointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
