import { useState } from 'react';
import { Search, User, MapPin, Phone, Calendar, Briefcase, DollarSign, TrendingUp, TrendingDown, Home, Zap, Sprout, FileText, Navigation, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Calendar as CalendarComponent } from './ui/calendar';

const beneficiariesList = [
  {
    id: 'BEN-2025-001',
    name: 'আব্দুল করিম শেখ',
    phone: '+৮৮০১৭১২৩৪৫৬৭৮',
    location: 'শিমুলিয়া, রামপুর, সাভার',
    fullAddress: 'গ্রাম: শিমুলিয়া, ওয়ার্ড নং: ০৩, ইউনিয়ন: রামপুর, উপজেলা: সাভার, জেলা: ঢাকা',
    latitude: 23.8103,
    longitude: 90.4125,
    image: 'https://images.unsplash.com/photo-1641260774125-04d527b376a5?w=200&h=200&fit=crop',
    verified: true,
  },
  {
    id: 'BEN-2025-002',
    name: 'ফাতেমা বেগম',
    phone: '+৮৮০১৮১২৩৪৫৬৭৯',
    location: 'কামারপাড়া, শিমুলিয়া, সাভার',
    fullAddress: 'গ্রাম: কামারপাড়া, ওয়ার্ড নং: ০২, ইউনিয়ন: শিমুলিয়া, উপজেলা: সাভার, জেলা: ঢাকা',
    latitude: 23.8205,
    longitude: 90.4235,
    image: 'https://images.unsplash.com/photo-1643309053949-99eb896aec0a?w=200&h=200&fit=crop',
    verified: true,
  },
  {
    id: 'BEN-2025-003',
    name: 'মোহাম্মদ রহিম',
    phone: '+৮৮০১৯১২৩৪৫৬৮০',
    location: 'মাছিমপুর, রামপুর, সাভার',
    fullAddress: 'গ্রাম: মাছিমপুর, ওয়ার্ড নং: ০১, ইউনিয়ন: রামপুর, উপজেলা: সাভার, জেলা: ঢাকা',
    latitude: 23.7985,
    longitude: 90.4012,
    image: 'https://images.unsplash.com/photo-1558289282-647de9fdf608?w=200&h=200&fit=crop',
    verified: false,
  },
  {
    id: 'BEN-2025-004',
    name: 'সালমা খাতুন',
    phone: '+৮৮০১৬১২৩৪৫৬৮১',
    location: 'বড়গ্রাম, আমিনবাজার, সাভার',
    fullAddress: 'গ্রাম: বড়গ্রাম, ওয়ার্ড নং: ০৫, ইউনিয়ন: আমিনবাজার, উপজেলা: সাভার, জেলা: ঢাকা',
    latitude: 23.8145,
    longitude: 90.3985,
    image: 'https://images.unsplash.com/photo-1634018232227-011fd865c47e?w=200&h=200&fit=crop',
    verified: true,
  },
  {
    id: 'BEN-2025-005',
    name: 'আব্দুল হামিদ',
    phone: '+৮৮০১৫১২৩৪৫৬৮২',
    location: 'নয়াপাড়া, রামপুর, সাভার',
    fullAddress: 'গ্রাম: নয়াপাড়া, ওয়ার্ড নং: ০৪, ইউনিয়ন: রামপুর, উপজেলা: সাভার, জেলা: ঢাকা',
    latitude: 23.8065,
    longitude: 90.4165,
    image: 'https://images.unsplash.com/photo-1667203808958-5744db8745e9?w=200&h=200&fit=crop',
    verified: true,
  },
];

const assistanceRecords = [
  {
    id: 1,
    type: 'নগদ সহায়তা',
    typeEn: 'Cash Assistance',
    date: '১৫ জানুয়ারি, ২০২৫',
    amount: '১০,০০০',
    status: 'সঠিকভাবে ব্যবহার হয়েছে',
    statusColor: 'green',
    followUp: 'সম্পন্ন',
  },
  {
    id: 2,
    type: 'গৃহ মেরামত',
    typeEn: 'House Repair',
    date: '০৩ ফেব্রুয়ারি, ২০২৫',
    amount: '২৫,০০০',
    status: 'ফলো-আপ প্রয়োজন',
    statusColor: 'orange',
    followUp: 'চলমান',
  },
  {
    id: 3,
    type: 'গবাদি পশু',
    typeEn: 'Livestock',
    date: '২০ মার্চ, ২০২৫',
    amount: '১৫,০০০',
    status: 'সঠিকভাবে ব্যবহার হয়েছে',
    statusColor: 'green',
    followUp: 'সম্পন্ন',
  },
];

export default function BeneficiaryProfile() {
  const [selectedBeneficiary, setSelectedBeneficiary] = useState<typeof beneficiariesList[0] | null>(null);
  const [followUpDate, setFollowUpDate] = useState<Date | undefined>(new Date());
  const [searchQuery, setSearchQuery] = useState('');

  const income = 180000;
  const expense = 165000;
  const balance = income - expense;

  const filteredBeneficiaries = beneficiariesList.filter(
    (b) =>
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.phone.includes(searchQuery)
  );

  const handleGetDirection = (lat: number, lng: number) => {
    // Open Google Maps with the location
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
  };

  if (selectedBeneficiary) {
    return (
      <div className="space-y-6">
        {/* Back Button */}
        <Button
          variant="outline"
          onClick={() => setSelectedBeneficiary(null)}
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          ফিরে যান (Back to List)
        </Button>

        {/* Profile Summary Card */}
        <Card className="border-2 border-blue-600">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src={selectedBeneficiary.image} />
                <AvatarFallback>{selectedBeneficiary.name.charAt(0)}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <h2>{selectedBeneficiary.name}</h2>
                  {selectedBeneficiary.verified && (
                    <Badge className="bg-green-600 w-fit">নিশ্চিত (Verified)</Badge>
                  )}
                </div>
                <div className="space-y-1 text-gray-600">
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    ID: {selectedBeneficiary.id}
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <Phone className="w-4 h-4" />
                    {selectedBeneficiary.phone}
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <MapPin className="w-4 h-4" />
                    {selectedBeneficiary.fullAddress}
                  </p>
                </div>
                
                {/* Get Direction Button */}
                <div className="mt-4">
                  <Button
                    onClick={() => handleGetDirection(selectedBeneficiary.latitude, selectedBeneficiary.longitude)}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    দিকনির্দেশনা পান (Get Direction)
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Collapsible Sections */}
        <Accordion type="multiple" defaultValue={["details", "assistance"]} className="space-y-4">
          {/* Details Section */}
          <AccordionItem value="details" className="border rounded-lg bg-white">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600" />
                <span>ব্যক্তিগত ও জীবিকা বিবরণ</span>
                <span className="text-sm text-gray-500 ml-2">(Personal & Livelihood Details)</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <Accordion type="multiple" className="space-y-4">
                {/* Personal Information Subsection */}
                <AccordionItem value="personal" className="border rounded-lg">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline">
                    <span className="text-blue-600">ব্যক্তিগত তথ্য (Personal Information)</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="w-1/3">পিতার নাম</TableCell>
                          <TableCell>আবু বকর শেখ</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>মাতার নাম</TableCell>
                          <TableCell>আমেনা খাতুন</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>জন্ম তারিখ</TableCell>
                          <TableCell>১৫ জানুয়ারি, ১৯৮৫ (42 বছর)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>বৈবাহিক অবস্থা</TableCell>
                          <TableCell>বিবাহিত (Married)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>পরিবারের সদস্য সংখ্যা</TableCell>
                          <TableCell>৫ জন</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>শিক্ষাগত যোগ্যতা</TableCell>
                          <TableCell>প্রাথমিক (Primary)</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </AccordionContent>
                </AccordionItem>

                {/* Address Subsection */}
                <AccordionItem value="address" className="border rounded-lg">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline">
                    <span className="text-blue-600 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      ঠিকানা (Address)
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-700">{selectedBeneficiary.fullAddress}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Livelihood Subsection */}
                <AccordionItem value="livelihood" className="border rounded-lg">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline">
                    <span className="text-blue-600 flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      জীবিকা বিবরণ (Livelihood Details)
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-600">বার্ষিক আয়</p>
                              <p className="text-green-600 mt-1">৳১,৮০,০০০</p>
                            </div>
                            <TrendingUp className="w-6 h-6 text-green-600 opacity-20" />
                          </div>
                        </div>
                        <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-600">বার্ষিক ব্যয়</p>
                              <p className="text-red-600 mt-1">৳১,৬৫,০০০</p>
                            </div>
                            <TrendingDown className="w-6 h-6 text-red-600 opacity-20" />
                          </div>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-600">ভারসাম্য</p>
                              <p className="text-blue-600 mt-1">+৳{balance.toLocaleString()}</p>
                            </div>
                            <DollarSign className="w-6 h-6 text-blue-600 opacity-20" />
                          </div>
                        </div>
                      </div>
                      <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell className="w-1/3">মূল পেশা</TableCell>
                            <TableCell>কৃষি কাজ (Agriculture)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>অতিরিক্ত পেশা</TableCell>
                            <TableCell>দিন মজুর (Day Laborer)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>মাসিক গড় আয়</TableCell>
                            <TableCell>৳১৫,০০০</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>পরিবারের অন্যান্য আয়</TableCell>
                            <TableCell>৳৩,০০০/মাস</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Land & Property Subsection */}
                <AccordionItem value="land" className="border rounded-lg">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline">
                    <span className="text-blue-600 flex items-center gap-2">
                      <Sprout className="w-4 h-4" />
                      জমি ও সম্পত্তি (Land & Property)
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="w-1/3">জমির মালিকানা</TableCell>
                          <TableCell><Badge className="bg-green-600">হ্যাঁ</Badge></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>জমির পরিমাণ</TableCell>
                          <TableCell>২.৫ শতাংশ</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>কৃষি জমি</TableCell>
                          <TableCell>১.৫ শতাংশ</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>বসত ভিটা</TableCell>
                          <TableCell>১.০ শতাংশ</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </AccordionContent>
                </AccordionItem>

                {/* House Subsection */}
                <AccordionItem value="house" className="border rounded-lg">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline">
                    <span className="text-blue-600 flex items-center gap-2">
                      <Home className="w-4 h-4" />
                      ঘর ও পরিকাঠামো (House & Infrastructure)
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="w-1/3">ঘরের ধরন</TableCell>
                          <TableCell>আধা-পাকা (Semi-Pucca)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>ঘরের সংখ্যা</TableCell>
                          <TableCell>২ টি কক্ষ</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>ছাদের ধরন</TableCell>
                          <TableCell>টিন (Tin)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>দেয়ালের ধরন</TableCell>
                          <TableCell>মাটি ও বাঁশ (Mud & Bamboo)</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </AccordionContent>
                </AccordionItem>

                {/* Utilities Subsection */}
                <AccordionItem value="utilities" className="border rounded-lg">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline">
                    <span className="text-blue-600 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      সুবিধাসমূহ (Utilities)
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="w-1/3">বিদ্যুৎ সংযোগ</TableCell>
                          <TableCell><Badge className="bg-green-600">আছে</Badge></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>রান্নার জ্বালানি</TableCell>
                          <TableCell>কাঠ ও গ্যাস</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>পানীয় জলের উৎস</TableCell>
                          <TableCell>নলকূপ (Tubewell)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>শৌচাগারের ধরন</TableCell>
                          <TableCell>স্যানিটারি</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </AccordionContent>
                </AccordionItem>

                {/* Livestock Subsection */}
                <AccordionItem value="livestock" className="border rounded-lg">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline">
                    <span className="text-blue-600">গৃহপালিত পশু (Livestock)</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="p-4 bg-blue-50 rounded-lg text-center border border-blue-200">
                        <p className="text-blue-600">🐄</p>
                        <p className="text-sm text-gray-600 mt-2">গরু</p>
                        <p>২ টি</p>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg text-center border border-green-200">
                        <p className="text-green-600">🐐</p>
                        <p className="text-sm text-gray-600 mt-2">ছাগল</p>
                        <p>৩ টি</p>
                      </div>
                      <div className="p-4 bg-yellow-50 rounded-lg text-center border border-yellow-200">
                        <p className="text-yellow-600">🐔</p>
                        <p className="text-sm text-gray-600 mt-2">মুরগি</p>
                        <p>১০ টি</p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg text-center border border-purple-200">
                        <p className="text-purple-600">🦆</p>
                        <p className="text-sm text-gray-600 mt-2">হাঁস</p>
                        <p>৫ টি</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>

          {/* Assistance Section */}
          <AccordionItem value="assistance" className="border rounded-lg bg-white">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <span>সহায়তা ইতিহাস</span>
                <span className="text-sm text-gray-500 ml-2">(Assistance History)</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="space-y-4">
                {/* Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-sm text-gray-600">মোট সহায়তা</p>
                    <p className="text-green-600 mt-1">৳৫০,০০০</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-gray-600">সংখ্যা</p>
                    <p className="text-blue-600 mt-1">৩ টি</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <p className="text-sm text-gray-600">ফলো-আপ প্রয়োজন</p>
                    <p className="text-orange-500 mt-1">১ টি</p>
                  </div>
                </div>

                {/* Table - Desktop */}
                <div className="hidden md:block">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>সহায়তার ধরন</TableHead>
                        <TableHead>তারিখ</TableHead>
                        <TableHead>পরিমাণ (৳)</TableHead>
                        <TableHead>অবস্থা</TableHead>
                        <TableHead>ফলো-আপ</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {assistanceRecords.map((record) => (
                        <TableRow key={record.id}>
                          <TableCell>
                            <div>
                              <p>{record.type}</p>
                              <p className="text-sm text-gray-500">{record.typeEn}</p>
                            </div>
                          </TableCell>
                          <TableCell>{record.date}</TableCell>
                          <TableCell>৳{record.amount}</TableCell>
                          <TableCell>
                            <Badge
                              className={
                                record.statusColor === 'green'
                                  ? 'bg-green-600'
                                  : 'bg-orange-500'
                              }
                            >
                              {record.statusColor === 'green' ? '✅' : '⚠️'} {record.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{record.followUp}</Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* Cards - Mobile */}
                <div className="md:hidden space-y-3">
                  {assistanceRecords.map((record) => (
                    <div key={record.id} className="p-4 bg-gray-50 rounded-lg border">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p>{record.type}</p>
                          <p className="text-sm text-gray-500">{record.typeEn}</p>
                        </div>
                        <Badge
                          className={
                            record.statusColor === 'green' ? 'bg-green-600' : 'bg-orange-500'
                          }
                        >
                          {record.statusColor === 'green' ? '✅' : '⚠️'}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p className="text-gray-600">তারিখ</p>
                          <p>{record.date}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">পরিমাণ</p>
                          <p>৳{record.amount}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Follow-up Button */}
                <div className="pt-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <Calendar className="w-4 h-4 mr-2" />
                        ফলো-আপ যোগ করুন (Add Follow-up)
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>ফলো-আপ তারিখ নির্বাচন করুন</DialogTitle>
                      </DialogHeader>
                      <div className="flex flex-col items-center gap-4 py-4">
                        <CalendarComponent
                          mode="single"
                          selected={followUpDate}
                          onSelect={setFollowUpDate}
                          className="rounded-md border"
                        />
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          নিশ্চিত করুন (Confirm)
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          type="text"
          placeholder="🔍 উপকারভোগী অনুসন্ধান করুন (Search Beneficiary)"
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Beneficiaries List */}
      <div>
        <h3 className="mb-4">সকল উপকারভোগী (All Beneficiaries)</h3>
        <div className="space-y-3">
          {filteredBeneficiaries.map((beneficiary) => (
            <Card
              key={beneficiary.id}
              onClick={() => setSelectedBeneficiary(beneficiary)}
              className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-blue-400"
            >
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={beneficiary.image} />
                    <AvatarFallback>{beneficiary.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p>{beneficiary.name}</p>
                      {beneficiary.verified && (
                        <Badge className="bg-green-600">নিশ্চিত</Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{beneficiary.id}</p>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      {beneficiary.phone}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {beneficiary.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
