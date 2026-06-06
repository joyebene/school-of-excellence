import { LucideIcon } from 'lucide-react';
import React from 'react';

interface ContactInfoItemProps {
  icon: LucideIcon;
  iconBgColor: string;
  iconColor: string;
  title: string;
  children: React.ReactNode;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
  icon: Icon,
  iconBgColor,
  iconColor,
  title,
  children,
}) => {
  return (
    <div className="flex gap-4">
      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl ${iconBgColor} flex items-center justify-center shrink-0`}>
        <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${iconColor}`} />
      </div>
      <div>
        <p className="font-medium text-gray-900">{title}</p>
        {children}
      </div>
    </div>
  );
};

export default ContactInfoItem;