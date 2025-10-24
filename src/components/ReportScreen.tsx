import { useState } from 'react';
import { FileText, Download, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

const reportData = [
  {
    district: 'চট্টগ্রাম',
    upazila: 'সাতকানিয়া',
    union: 'সোনাইছড়ি',
    village: 'বড়গ্রাম',
    totalBeneficiaries: 345,
    totalAssistance: '৳২,৩৫,০০০',
    followUps: 12,
  },
  {
    district: 'বরিশাল',
    upazila: 'বাকেরগঞ্জ',
    union: 'কাঁঠালিয়া',
    village: 'চরকাউয়া',
    totalBeneficiaries: 289,
    totalAssistance: '৳১,৮৯,০০০',
    followUps: 8,
  },
  {
    district: 'খুলনা',
    upazila: 'দৌলতপুর',
    union: 'মধুসূদনকাঠী',
    village: 'নয়াপাড়া',
    totalBeneficiaries: 412,
    totalAssistance: '৳২,৭৮,০০০',
    followUps: 15,
  },
];

export default function ReportScreen() {
  const [selectedMonth, setSelectedMonth] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('2025');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const [selectedUpazila, setSelectedUpazila] = useState<string>('');
  const [selectedUnion, setSelectedUnion] = useState<string>('');
  const [selectedVillage, setSelectedVillage] = useState<string>('');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="flex items-center gap-2">
          <FileText className="w-6 h-6 text-blue-600" />
          রিপোর্ট
        </h2>
        <p className="text-gray-600">Report Generation</p>
      </div>

      {/* Filter Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-blue-600" />
            ফিল্টার অপশন
          </CardTitle>
          <p className="text-sm text-gray-500">Filter Options</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Time Period */}
            <div>
              <p className="mb-2">সময়কাল (Time Period)</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                  <SelectTrigger>
                    <SelectValue placeholder="মাস নির্বাচন করুন (Select Month)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">সকল মাস</SelectItem>
                    <SelectItem value="01">জানুয়ারি (January)</SelectItem>
                    <SelectItem value="02">ফেব্রুয়ারি (February)</SelectItem>
                    <SelectItem value="03">মার্চ (March)</SelectItem>
                    <SelectItem value="04">এপ্রিল (April)</SelectItem>
                    <SelectItem value="05">মে (May)</SelectItem>
                    <SelectItem value="06">জুন (June)</SelectItem>
                    <SelectItem value="07">জুলাই (July)</SelectItem>
                    <SelectItem value="08">আগস্ট (August)</SelectItem>
                    <SelectItem value="09">সেপ্টেম্বর (September)</SelectItem>
                    <SelectItem value="10">অক্টোবর (October)</SelectItem>
                    <SelectItem value="11">নভেম্বর (November)</SelectItem>
                    <SelectItem value="12">ডিসেম্বর (December)</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger>
                    <SelectValue placeholder="বছর নির্বাচন করুন (Select Year)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2025">২০২৫</SelectItem>
                    <SelectItem value="2024">২০২৪</SelectItem>
                    <SelectItem value="2023">২০২৩</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Location Filters */}
            <div>
              <p className="mb-2">অবস্থান (Location)</p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                  <SelectTrigger>
                    <SelectValue placeholder="জেলা (District)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">সকল জেলা</SelectItem>
                    <SelectItem value="chattogram">চট্টগ্রাম</SelectItem>
                    <SelectItem value="barishal">বরিশাল</SelectItem>
                    <SelectItem value="khulna">খুলনা</SelectItem>
                    <SelectItem value="sylhet">সিলেট</SelectItem>
                    <SelectItem value="rangpur">রংপুর</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedUpazila} onValueChange={setSelectedUpazila}>
                  <SelectTrigger>
                    <SelectValue placeholder="উপজেলা (Upazila)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">সকল উপজেলা</SelectItem>
                    <SelectItem value="satkania">সাতকানিয়া</SelectItem>
                    <SelectItem value="bakerganj">বাকেরগঞ্জ</SelectItem>
                    <SelectItem value="daulatpur">দৌলতপুর</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedUnion} onValueChange={setSelectedUnion}>
                  <SelectTrigger>
                    <SelectValue placeholder="ইউনিয়ন (Union)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">সকল ইউনিয়ন</SelectItem>
                    <SelectItem value="sonaichari">সোনাইছড়ি</SelectItem>
                    <SelectItem value="kathalia">কাঁঠালিয়া</SelectItem>
                    <SelectItem value="madhusudankathi">মধুসূদনকাঠী</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedVillage} onValueChange={setSelectedVillage}>
                  <SelectTrigger>
                    <SelectValue placeholder="গ্রাম (Village)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">সকল গ্রাম</SelectItem>
                    <SelectItem value="borgram">বড়গ্রাম</SelectItem>
                    <SelectItem value="charkauya">চরকাউয়া</SelectItem>
                    <SelectItem value="nayapara">নয়াপাড়া</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Filter className="w-4 h-4 mr-2" />
                রিপোর্ট তৈরি করুন (Generate Report)
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                ডাউনলোড করুন (Download)
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-l-4 border-l-blue-600">
          <CardContent className="pt-6">
            <p className="text-gray-600">মোট উপকারভোগী</p>
            <p className="text-sm text-gray-500">Total Beneficiaries</p>
            <p className="text-blue-600 mt-2">১,০৪৬</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-600">
          <CardContent className="pt-6">
            <p className="text-gray-600">মোট সহায়তা</p>
            <p className="text-sm text-gray-500">Total Assistance</p>
            <p className="text-green-600 mt-2">৳৭,০২,০০০</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardContent className="pt-6">
            <p className="text-gray-600">মোট ফলো-আপ</p>
            <p className="text-sm text-gray-500">Total Follow-ups</p>
            <p className="text-orange-500 mt-2">৩৫ টি</p>
          </CardContent>
        </Card>
      </div>

      {/* Report Table */}
      <Card>
        <CardHeader>
          <CardTitle>বিস্তারিত রিপোর্ট</CardTitle>
          <p className="text-sm text-gray-500">Detailed Report</p>
        </CardHeader>
        <CardContent>
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>জেলা</TableHead>
                  <TableHead>উপজেলা</TableHead>
                  <TableHead>ইউনিয়ন</TableHead>
                  <TableHead>গ্রাম</TableHead>
                  <TableHead>উপকারভোগী</TableHead>
                  <TableHead>মোট সহায়তা</TableHead>
                  <TableHead>ফলো-আপ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reportData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.district}</TableCell>
                    <TableCell>{row.upazila}</TableCell>
                    <TableCell>{row.union}</TableCell>
                    <TableCell>{row.village}</TableCell>
                    <TableCell>{row.totalBeneficiaries}</TableCell>
                    <TableCell>{row.totalAssistance}</TableCell>
                    <TableCell>{row.followUps} টি</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {reportData.map((row, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg border">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray-600">জেলা</p>
                    <p>{row.district}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">উপজেলা</p>
                    <p>{row.upazila}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">ইউনিয়ন</p>
                    <p>{row.union}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">গ্রাম</p>
                    <p>{row.village}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">উপকারভোগী</p>
                    <p>{row.totalBeneficiaries}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">মোট সহায়তা</p>
                    <p>{row.totalAssistance}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-600">ফলো-আপ</p>
                    <p>{row.followUps} টি</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
