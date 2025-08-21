
function openMail(e){
  e.preventDefault();
  const form = e.target;
  const name = encodeURIComponent(form.name.value.trim());
  const phone = encodeURIComponent(form.phone.value.trim());
  const role = encodeURIComponent(form.role.value);
  const message = encodeURIComponent(form.message.value.trim());
  const subject = `Job Application: ${role} – ${form.name.value.trim()}`;
  const body = `Name: ${decodeURIComponent(name)}%0A` +
               `Phone/WhatsApp: ${decodeURIComponent(phone)}%0A` +
               `Role: ${decodeURIComponent(role)}%0A%0A` +
               `Message:%0A${decodeURIComponent(message)}`;
  window.location.href = `mailto:admin@sanglapprojects.com?subject=${subject}&body=${body}`;
  return false;
}
function openWhatsApp(e){
  e.preventDefault();
  const form = e.target;
  const name = encodeURIComponent(form.vname.value.trim());
  const phone = encodeURIComponent(form.vphone.value.trim());
  const vehicle = encodeURIComponent(form.vehicle.value);
  const msg = encodeURIComponent(form.vmessage.value.trim());
  const text = `Vendor Registration%0AName: ${decodeURIComponent(name)}%0A` +
               `Phone: ${decodeURIComponent(phone)}%0A` +
               `Vehicle: ${decodeURIComponent(vehicle)}%0A%0A` +
               `Message:%0A${decodeURIComponent(msg)}`;
  window.open(`https://wa.me/918910724365?text=${text}`, '_blank');
  return false;
}
