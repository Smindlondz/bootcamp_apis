var services = 'call, sms, call, sms, sms'
export default function totalPhoneBill(service) {
    // Declare a new counter and initialized to 0
    if (!service.trim()){
        return '';
    };
    let counter = 0;
    // Split the given string to create and array
    const totalServices = service.split(',');
    for (let i = 0; i < totalServices.length; i++) {
        const currentService = totalServices[i].trim();
        // Check for services
        if (currentService.startsWith('s')) {
            counter += 0.65;
        }
        else {
            counter += 2.75;
        }
    }
    return 'R' + counter.toFixed(2)
};