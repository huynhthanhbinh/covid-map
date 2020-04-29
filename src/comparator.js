export const PatientComparator = (patient1, patient2) => {
    const date1 = new Date(patient1.verifyDate);
    const date2 = new Date(patient2.verifyDate);
    return date2 - date1;
}