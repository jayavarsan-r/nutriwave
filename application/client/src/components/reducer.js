export const sanitizeOrderData = (data) => {
    const sanitizedData = { ...data };
  
    // Remove fields from the top level
    delete sanitizedData.orderHeaderKey;
  
    // Remove fields from order lines
    sanitizedData.orderLines?.forEach((line) => {
      delete line.orderLineKey;
  
      // Remove fields from taxes
      line.taxes?.forEach((tax) => {
        delete tax.taxKey;
      });
  
      // Remove fields from order line statuses
      line.orderLineStatuses?.forEach((status) => {
        delete status.orderLineStatusKey;
        delete status.orderLineReleaseKey;
        delete status.orderLineScheduleKey;
      });
  
      // Remove fields from childOrderLineRelationships
      line.childOrderLineRelationships?.forEach((relationship) => {
        delete relationship.parentOrderLineKey;
        delete relationship.childOrderLineKey;
      });
  
      // Remove fields from parentOrderLineRelationships
      line.parentOrderLineRelationships?.forEach((relationship) => {
        delete relationship.parentOrderLineKey;
        delete relationship.childOrderLineKey;
      });
  
      // Remove fields from lineTaxBreakUp (if applicable)
      line.lineTaxBreakUp?.forEach((taxBreakUp) => {
        delete taxBreakUp.taxKey;
      });
  
      // Remove fields from orderLineRelationships (if applicable)
      line.orderLineRelationships?.forEach((relationship) => {
        delete relationship.parentOrderLineKey;
        delete relationship.childOrderLineKey;
      });
    });
  
    // Remove fields from payment tenders (if applicable)
    sanitizedData.paymentTenders?.forEach((tender) => {
      delete tender.paymentKey;
    });
  
    // Remove fields from payment transactions (if applicable)
    sanitizedData.paymentTransactions?.forEach((transaction) => {
      delete transaction.paymentTransactionKey;
      delete transaction.paymentKey;
    });
  
    // Remove fields from work orders (if applicable)
    sanitizedData.workOrders?.forEach((workOrder) => {
      delete workOrder.workOrderKey;
  
      // Remove fields from work order appointments (if applicable)
      workOrder.workOrderAppointments?.forEach((appt) => {
        delete appt.workOrderApptKey;
      });
  
      // Remove fields from work order product deliveries (if applicable)
      workOrder.workOrderProdDeliveries?.forEach((delivery) => {
        delete delivery.workOrderProdDelKey;
        delete delivery.orderLineKey;
      });
  
      // Remove fields from work order service lines (if applicable)
      workOrder.workOrderServiceLines?.forEach((serviceLine) => {
        delete serviceLine.workOrderServiceLineKey;
        delete serviceLine.orderLineKey;
      });
    });
  
    return sanitizedData;
  };
  